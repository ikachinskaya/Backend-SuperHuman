const { SuperHuman } = require("../models");

module.exports.createSuperHuman = async (req, res, next) => {
  try {
    const { body } = req;
    const newSuperHuman = await SuperHuman.create(body);
    res.send({ data: newSuperHuman });
  } catch (error) {
    next(error);
  }
};
