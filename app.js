const express = require("express");
const cors = require("cors");
const app = express();
const authRouter = require("./routes/authRouter");

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);

module.exports = app;
