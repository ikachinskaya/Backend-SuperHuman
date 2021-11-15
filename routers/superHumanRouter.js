const superHumanRouter = require("express").Router();

const SuperHumanController = require("../controllers/superHumanControllers");

superHumanRouter.post("/", SuperHumanController.createSuperHuman);

module.exports = superHumanRouter;
