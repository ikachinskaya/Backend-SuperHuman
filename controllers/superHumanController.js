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
//===================================================================
module.exports.updateSuperHuman = async (req, res, next) => {
  try {
    const { body, superHumanInstance } = req;
    const [updatedRows, [updatedSuperHuman]] = await superHumanInstance.update(
      body,
      {
        returning: true,
      }
    );
    res.send({ data: updatedSuperHuman });
  } catch (error) {
    next(error);
  }
};
//===================================================================
module.exports.deleteSuperHuman = async (req, res, next) => {
  try {
    const { superHumanInstance } = req;
    await superHumanInstance.destroy();
    res.send({ data: superHumanInstance });
  } catch (error) {
    next(error);
  }
};
//===================================================================
module.exports.getSuperHumans = async (req, res, next) => {
  try {
    const superHumans = await SuperHuman.findAll();
    res.send({ data: superHumans });
  } catch (error) {
    next(error);
  }
};
//===================================================================
