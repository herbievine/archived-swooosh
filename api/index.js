const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const config = require("../app.config");

const URL = mongoose.model("Url", config.URLSchema, "urls");

// Endpoint to create a URL, and save to DB
router.post("/create", async (req, res) => {
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
                    data: data,
                    ok: true,
                    status: 200,
                });
        });
    } catch (error) {
        res.status(404).json({
            error,
        });
    }
});

// Endpoint to gather data on the URL
router.get('/url/:id', async (req, res) => {
    const { id } = await req.params;
    if (id) {
        URL.findById(id, async (err, doc) => {
            if (err || !doc) res.status(404).json({
                ok: false,
                status: 404,
                message: 'URL not found',
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
})

module.exports = router;
