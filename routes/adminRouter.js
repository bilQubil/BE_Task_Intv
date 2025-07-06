const express = require("express");
const router = express.Router();
const { authentication, isAdmin } = require("../middlewares/authentication");
const adminController = require("../controllers/adminController");

router.use(authentication);
router.use(isAdmin);

router.get("/biodata", adminController.getBiodata);
router.get("/biodata/:id", adminController.getBiodataById);
router.put("/biodata/:id", adminController.updateBiodata);
router.delete("/biodata/:id", adminController.deleteBiodata);

module.exports = router;
