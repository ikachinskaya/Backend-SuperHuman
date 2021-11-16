const superHumanRouter = require("express").Router();

const SuperHumanController = require("../controllers/superHumanControllers");

const { findSuperHuman } = require("../middlewares/superHumanMW");

superHumanRouter.post("/", SuperHumanController.createSuperHuman);

superHumanRouter.patch(
  "/:id",
  findSuperHuman,
  SuperHumanController.updateSuperHuman
);

superHumanRouter.delete(
  "/:id",
  findSuperHuman,
  SuperHumanController.deleteSuperHuman
);

superHumanRouter.get("/", SuperHumanController.getSuperHumans);

module.exports = superHumanRouter;
