const dotenv = require('dotenv');
dotenv.config();

const express = require("express");
const bodyParser = require(`body-parser`);
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const router = require('./routes/index');

const app = express();

const corsOptions = {
    origin:`${process.env.URL_CLIENT}`
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(helmet());
app.use(morgan(`combined`));

app.use(router);

module.exports = app;