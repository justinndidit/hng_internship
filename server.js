const express = require("express");
const router = require("./route");
const app = express();

app.use(express.json());

app.use("/api", router);

app.use("*", (req, res) => {
  res.status(404).send("Route not found");
});

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
