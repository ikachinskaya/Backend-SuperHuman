const express = require("express");

const router = express.Router();

const superHumanRouter = require("./superHumanRouter");

router.use("/superhumans", superHumanRouter);

module.exports = router;
