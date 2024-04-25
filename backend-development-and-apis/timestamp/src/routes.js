const router = require("express").Router();

const { getTimestamp } = require("./controllers");

router.get("/:date?", getTimestamp);

module.exports = { router };
