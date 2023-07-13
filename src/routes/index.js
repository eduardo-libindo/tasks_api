const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).json({message: `hello i am route main!`})
});

//routes
require('./task.route')(router);

module.exports = router;