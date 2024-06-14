require("dotenv").config();

const express = require("express");

const { router } = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", router);

app.listen(PORT, () => {
  console.log("URL Shortener service listening on port ", PORT);
});
