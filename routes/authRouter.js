const express = require("express");
const router = express.Router();
const controller = require("../controllers/authController");
const {
    validate,
    registerSchema,
    loginSchema,
} = require("../middlewares/validation");

router.post("/register", validate(registerSchema), controller.postRegister);
router.post("/login", validate(loginSchema), controller.postLogin);

module.exports = router;
