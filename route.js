const { Router } = require("express");
const router = Router();
const { getUser } = require("./controller.js");

router.get("/", getUser);

module.exports = router;
