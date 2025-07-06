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

router.get("/education", adminController.getEducationHistories);
router.get("/education/:id", adminController.getEducationHistoryById);
router.put("/education/:id", adminController.updateEducationHistory);
router.delete(
    "/education/:educationId",
    adminController.deleteEducationHistory
);

router.get("/job", adminController.getJobHistories);
router.get("/job/:id", adminController.getJobHistoryById);
router.put("/job/:id", adminController.updateJobHistory);
router.delete("/job/:jobId", adminController.deleteJobHistory);

router.get("/training", adminController.getTrainingHistories);
router.get("/training/:id", adminController.getTrainingHistoryById);
router.put("/training/:id", adminController.updateTrainingHistory);
router.delete("/training/:trainingId", adminController.deleteTrainingHistory);

module.exports = router;
