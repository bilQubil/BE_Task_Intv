const express = require("express");
const router = express.Router();
const authRouter = require("./authRouter");
const biodataRouter = require("./biodataRouter");
const adminRouter = require("./adminRouter");

router.use("/auth", authRouter);
router.use("/biodata", biodataRouter);
router.use("/admin", adminRouter);

module.exports = router;
