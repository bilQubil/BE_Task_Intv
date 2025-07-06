const express = require("express");
const router = express.Router();
const { authentication } = require("../middlewares/authentication");
const biodataController = require("../controllers/biodataController");
const historyController = require("../controllers/historyController");

router.use(authentication);

router.get("/me", biodataController.getBiodata);
router.post("/", biodataController.postBiodata);

router.get("/education", historyController.getEducationHistory);
router.get("/job", historyController.getJobHistory);
router.get("/training", historyController.getTrainingHistory);

router.post("/education", historyController.addEducationHistory);
router.post("/job", historyController.addJobHistory);
router.post("/training", historyController.addTrainingHistory);

module.exports = router;
