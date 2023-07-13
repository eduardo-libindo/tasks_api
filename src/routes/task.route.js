const Controller = require("../controllers/index");
const Middleware = require("../middlewares/index");

module.exports = function (router) {
  router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  //create
  router.post(
    "/task",
    Middleware.duplicate.duplicateTitle,
    Controller.Task.create
  );

  //get all
  router.get("/task", Controller.Task.getAll);
};