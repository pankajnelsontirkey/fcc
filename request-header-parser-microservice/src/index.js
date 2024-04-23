require("dotenv").config();

const express = require("express");
const { router } = require("./routes");

const app = express();

const PORT = process.env.PORT || 3000;

app.use("/api/", router);

app.listen(PORT, () => {
  console.log("Request header parser service listening on port ", PORT);
});
