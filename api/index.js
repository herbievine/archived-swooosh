const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const limitRate = require('express-rate-limit')
const slowRate = require("express-slow-down");
const config = require("../app.config");

const URL = mongoose.model("Url", config.URLSchema, "urls");

const limit = limitRate({
    windowMs: 10 * 30 * 1000,
    max: 30,
    message: {
        error: {
            path: "other",
            type: "rate",
            message: "Too many requests to the server"
        },
    },
});

const slow = slowRate({
    windowMs: 30 * 1000,
    delayAfter: 1,
    delayMs: 500
});

// Endpoint to create a URL, and save to DB
router.post("/create", limit, slow, async (req, res) => {
    let { id, url, redirect, shortUrl, createdOn } = req.body;

    try {
        const data = await config.schema.validate({
            id,
            url,
            redirect,
            shortUrl,
            clicks: 0,
            createdOn,
        });
        data["_id"] = data.id;
        const newUrl = new URL(data);

        newUrl.save((error) => {
            if (error) res.status(400).json(config.customError(error));
            else
                res.status(200).json({
                    ok: true,
                    status: 200,
                    data: data,
                });
        });
    } catch (error) {
        res.status(404).json({
            error,
        });
    }
});

// Endpoint to gather data on the URL
router.get('/analytics/:id', limit, slow, async (req, res) => {
    const { id } = await req.params;
    if (id) {
        URL.findById(id, async (err, doc) => {
            if (err || !doc) res.status(404).json({
                ok: false,
                status: 404,
                error: {
                    message: 'URL not found',
                    type: 'notFound'
                }
            })
            else if (doc) {
                res.status(200).json({
                    ok: true,
                    status: 200,
                    data: doc
                })
            }
        });
    } else res.redirect("/404", 404);
});

// Endpoint to delete a URL
router.delete('/delete/:id', limit, slow, async (req, res) => {
    const { id } = await req.params;
    if (id) {
        URL.findOneAndDelete({ "id": id }, (err, doc) => { 
            if (err || !doc) res.status(400).json({
                ok: false,
                status: 400,
                error: err
            })
            res.status(200).json({
                ok: true,
                status: 200,
                data: doc
            })
        });
    } else res.redirect(404, "/404");
});

module.exports = router;
