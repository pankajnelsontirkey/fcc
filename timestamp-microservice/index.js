require("dotenv").config();

const express = require("express");
const { router } = require("./src/routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/v1", router);

app.listen(PORT, () => {
  console.log("Timestamp service listening on port " + PORT);
});
