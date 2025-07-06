const {
    Biodata,
    EducationHistory,
    JobHistory,
    TrainingHistory,
} = require("../models");

class AdminController {
    static async getBiodata(req, res, next) {
        try {
            const biodata = await Biodata.findAll();
            res.json(biodata);
        } catch (error) {
            next(error);
        }
    }
    static async getBiodataById(req, res, next) {
        try {
            const { id } = req.params;
            const biodata = await Biodata.findByPk(id);
            if (!biodata)
                return res.status(404).json({ message: "Biodata not found" });
            res.json(biodata);
        } catch (error) {
            next(error);
        }
    }
    static async updateBiodata(req, res, next) {
        try {
            const { id } = req.params;
            const [updated] = await Biodata.update(
                { ...req.body },
                { where: { id }, returning: true }
            );
            if (!updated)
                return res.status(404).json({ message: "Biodata not found" });
            const updatedBiodata = await Biodata.findByPk(id);
            res.json(updatedBiodata);
        } catch (error) {
            next(error);
        }
    }
    static async deleteBiodata(req, res, next) {
        try {
            const { id } = req.params;
            const deleted = await Biodata.destroy({ where: { id } });
            if (!deleted)
                return res.status(404).json({ message: "Biodata not found" });
            res.json({ message: "Biodata deleted" });
        } catch (error) {
            next(error);
        }
    }
    static async getEducationHistories(req, res, next) {
        try {
            const educationHistories = await EducationHistory.findAll();
            res.json(educationHistories);
        } catch (error) {
            next(error);
        }
    }
    static async getEducationHistoryById(req, res, next) {
        try {
            const { id } = req.params;
            const educationHistory = await EducationHistory.findByPk(id);
            res.json(educationHistory);
        } catch (error) {
            next(error);
        }
    }
    static async getJobHistories(req, res, next) {
        try {
            const jobHistories = await JobHistory.findAll();
            res.json(jobHistories);
        } catch (error) {
            next(error);
        }
    }
    static async getJobHistoryById(req, res, next) {
        try {
            const { id } = req.params;
            const jobHistory = await JobHistory.findByPk(id);
            res.json(jobHistory);
        } catch (error) {
            next(error);
        }
    }
    static async getTrainingHistories(req, res, next) {
        try {
            const trainingHistories = await TrainingHistory.findAll();
            res.json(trainingHistories);
        } catch (error) {
            next(error);
        }
    }
    static async getTrainingHistoryById(req, res, next) {
        try {
            const { id } = req.params;
            const trainingHistory = await TrainingHistory.findByPk(id);
            res.json(trainingHistory);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = AdminController;
