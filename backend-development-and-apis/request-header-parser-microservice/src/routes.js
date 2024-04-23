const { getClientInfo } = require("./controllers");

const router = require("express").Router();

router.get("/whoami", getClientInfo);

module.exports = { router };
