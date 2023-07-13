const db = require("../models/index");
const Task = db.task;

duplicateTitle = async (req, res, next) => {
  try {

    // title
    let task = await Task.findOne({
      where: {
        title: req.body.title,
      },
    });

    if (task) {
      return res.status(400).send({
        message: "Falha! task já existe!",
      });
    }

    return next();
    
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
};

const duplicate = {
  duplicateTitle,
};

module.exports = duplicate;
