const { SuperHuman } = require("../models");

module.exports.findSuperHuman = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const superHumanInstance = await SuperHuman.findByPk(id);
    if (!superHumanInstance) {
      throw new Error("404. User not Found");
    }
    req.superHumanInstance = superHumanInstance;
    next();
  } catch (error) {
    next(error);
  }
};
