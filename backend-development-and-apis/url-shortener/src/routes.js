const { getShortUrl, getOriginalUrl } = require("./controllers");

const router = require("express").Router();

router.get("/shorturl/:url", getOriginalUrl);

router.post("/shorturl", getShortUrl);

module.exports = { router };
