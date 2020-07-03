const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const config = require("../app.config");

const URL = mongoose.model("Url", config.URLSchema, "urls");

// Endpoint that users go to that gets them redirected
router.get("/i/:id", async (req, res) => {
    const { id } = await req.params;
    if (id) {
        URL.findById(id, async (err, doc) => {
            if (err || !doc) res.status(404).redirect("/");
            else if (doc.url) {
                doc.clicks++;
                await doc.save();

                res.status(200).redirect(doc.url);
            }
        });
    } else res.redirect("/404", 404);
});

// Endpoint to create a URL, and save to DB
router.post("/create", async (req, res, next) => {
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

// Redirect
router.get('/*', (req, res) => {
    res.redirect('/?e=404')
});

module.exports = router;
