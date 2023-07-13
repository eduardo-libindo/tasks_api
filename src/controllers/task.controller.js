const db = require("../models/index");
const Task = db.task;

// create task
create = async (req, res) => {
  try {
    const {title, status} = req.body;

    if (!title) {
      return res
        .status(400)
        .json({ message: "campo vazio, por favor insira dados no atributo!" });
    }

    const task = await Task.create({
      title: title,
      status: status || 'pendente'
    });

    res.status(200).json({
      message: "Task registrada com sucesso!",
      task: task,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

getAll = async (req, res) => {
  try {
    await Task.findAll().then((tasks) => {
      res.send(tasks);
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const TaskController = {
  create,
  getAll,
};

module.exports = TaskController;
