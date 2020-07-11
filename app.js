/**
 * Software licensed under the Apache 2.0 license
 * See LICENSE in root folder for full file
 *
 * Copyright Herbie Vine 2020
 */

require("dotenv").config();

const config = require("./app.config");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

const app = express();

const mongoose = require("mongoose");

const limitRate = require('express-rate-limit')
const slowRate = require("express-slow-down");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/swooosh", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (e) => console.log(e));
db.once("open", () => console.log("Connected to DB"));

app.set('trust proxy', 1);

app.use(morgan("common"));
app.use(helmet());
app.use(express.json());
app.use(cors());

// Entry Point
app.use("/", express.static(config.path));
app.use("/404", express.static(config.path));

// Routes
const api = require("./api");
app.use("/api/v1", api);

const urlRedirect = require('./routes');
app.use('/', urlRedirect);

// Redirect
app.get('/*', (req, res) => {
    if (req.path === '/404') return;
    res.redirect('/404')
    // res.send('heelo')
});

const port = process.env.PRODUCTION ? process.env.PORT : 8080;
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
