const express = require("express");
const cors = require("cors");
const app = express();
const mainRouter = require("./routes/index");
const errorHandler = require("./middlewares/errorHandler");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", mainRouter);

app.use(errorHandler);

module.exports = app;
