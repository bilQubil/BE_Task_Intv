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
            const educationHistories = await EducationHistory.findAll({
                where: { biodataId: id },
            });
            res.json(educationHistories);
        } catch (error) {
            next(error);
        }
    }
    static async updateEducationHistory(req, res, next) {
        try {
            const { id } = req.params;
            const { EducationHistories } = req.body;

            if (!EducationHistories || !Array.isArray(EducationHistories)) {
                return res
                    .status(400)
                    .json({ message: "Invalid education data" });
            }

            // Delete existing education histories for this biodata
            await EducationHistory.destroy({ where: { biodataId: id } });

            // Create new education histories
            const educationData = EducationHistories.map((edu) => ({
                ...edu,
                biodataId: parseInt(id),
            }));

            const createdEducation = await EducationHistory.bulkCreate(
                educationData
            );
            res.json(createdEducation);
        } catch (error) {
            next(error);
        }
    }
    static async deleteEducationHistory(req, res, next) {
        try {
            const { educationId } = req.params;
            const deleted = await EducationHistory.destroy({
                where: { id: educationId },
            });
            if (!deleted)
                return res
                    .status(404)
                    .json({ message: "Education history not found" });
            res.json({ message: "Education history deleted" });
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
            const jobHistories = await JobHistory.findAll({
                where: { biodataId: id },
            });
            res.json(jobHistories);
        } catch (error) {
            next(error);
        }
    }
    static async updateJobHistory(req, res, next) {
        try {
            const { id } = req.params;
            const { JobHistories } = req.body;

            if (!JobHistories || !Array.isArray(JobHistories)) {
                return res.status(400).json({ message: "Invalid job data" });
            }

            // Delete existing job histories for this biodata
            await JobHistory.destroy({ where: { biodataId: id } });

            // Create new job histories
            const jobData = JobHistories.map((job) => ({
                ...job,
                biodataId: parseInt(id),
            }));

            const createdJobs = await JobHistory.bulkCreate(jobData);
            res.json(createdJobs);
        } catch (error) {
            next(error);
        }
    }
    static async deleteJobHistory(req, res, next) {
        try {
            const { jobId } = req.params;
            const deleted = await JobHistory.destroy({ where: { id: jobId } });
            if (!deleted)
                return res
                    .status(404)
                    .json({ message: "Job history not found" });
            res.json({ message: "Job history deleted" });
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
            const trainingHistories = await TrainingHistory.findAll({
                where: { biodataId: id },
            });
            res.json(trainingHistories);
        } catch (error) {
            next(error);
        }
    }
    static async updateTrainingHistory(req, res, next) {
        try {
            const { id } = req.params;
            const { TrainingHistories } = req.body;

            if (!TrainingHistories || !Array.isArray(TrainingHistories)) {
                return res
                    .status(400)
                    .json({ message: "Invalid training data" });
            }

            // Delete existing training histories for this biodata
            await TrainingHistory.destroy({ where: { biodataId: id } });

            // Create new training histories
            const trainingData = TrainingHistories.map((training) => ({
                ...training,
                biodataId: parseInt(id),
            }));

            const createdTraining = await TrainingHistory.bulkCreate(
                trainingData
            );
            res.json(createdTraining);
        } catch (error) {
            next(error);
        }
    }
    static async deleteTrainingHistory(req, res, next) {
        try {
            const { trainingId } = req.params;
            const deleted = await TrainingHistory.destroy({
                where: { id: trainingId },
            });
            if (!deleted)
                return res
                    .status(404)
                    .json({ message: "Training history not found" });
            res.json({ message: "Training history deleted" });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = AdminController;
