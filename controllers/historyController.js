const {
    EducationHistory,
    JobHistory,
    TrainingHistory,
    Biodata,
} = require("../models");

class HistoryController {
    static async addEducationHistory(req, res, next) {
        try {
            const {
                educationLevel,
                institutionName,
                major,
                graduationYear,
                gpa,
            } = req.body;
            if (
                !educationLevel ||
                !institutionName ||
                !major ||
                !graduationYear ||
                !gpa
            ) {
                return res
                    .status(400)
                    .json({ message: "All fields are required" });
            }
            const userId = req.user.id;
            const biodata = await Biodata.findOne({ where: { userId } });
            if (biodata) {
                const educationHistory = await EducationHistory.findOne({
                    where: { biodataId: biodata.id },
                });
                if (educationHistory) {
                    return res
                        .status(400)
                        .json({ message: "Education history already exists" });
                }
            }
            if (!biodata)
                return res.status(404).json({ message: "Biodata not found" });
            const newEducationHistory = await EducationHistory.create({
                biodataId: biodata.id,
                educationLevel,
                institutionName,
                major,
                graduationYear,
                gpa,
            });
            res.status(201).json(newEducationHistory);
        } catch (error) {
            next(error);
        }
    }

    static async addJobHistory(req, res, next) {
        try {
            const { companyName, lastPosition, lastSalary, year } = req.body;
            if (!companyName || !lastPosition || !lastSalary || !year) {
                return res
                    .status(400)
                    .json({ message: "All fields are required" });
            }
            const userId = req.user.id;
            const biodata = await Biodata.findOne({ where: { userId } });
            if (biodata) {
                const jobHistory = await JobHistory.findOne({
                    where: { biodataId: biodata.id },
                });
                if (jobHistory) {
                    return res
                        .status(400)
                        .json({ message: "Job history already exists" });
                }
            }
            if (!biodata)
                return res.status(404).json({ message: "Biodata not found" });

            const newJobHistory = await JobHistory.create({
                biodataId: biodata.id,
                companyName,
                lastPosition,
                lastSalary,
                year,
            });
            res.status(201).json(newJobHistory);
        } catch (error) {
            next(error);
        }
    }

    static async addTrainingHistory(req, res, next) {
        try {
            const { courseName, hasCertificate, year } = req.body;
            if (!courseName || !hasCertificate || !year) {
                return res
                    .status(400)
                    .json({ message: "All fields are required" });
            }
            const userId = req.user.id;
            const biodata = await Biodata.findOne({ where: { userId } });
            if (biodata) {
                const trainingHistory = await TrainingHistory.findOne({
                    where: { biodataId: biodata.id },
                });
                if (trainingHistory) {
                    return res
                        .status(400)
                        .json({ message: "Training history already exists" });
                }
            }
            if (!biodata)
                return res.status(404).json({ message: "Biodata not found" });

            const newTrainingHistory = await TrainingHistory.create({
                biodataId: biodata.id,
                courseName,
                hasCertificate,
                year,
            });
            res.status(201).json(newTrainingHistory);
        } catch (error) {
            next(error);
        }
    }

    static async getEducationHistory(req, res, next) {
        try {
            const userId = req.user.id;
            const biodata = await Biodata.findOne({ where: { userId } });
            if (!biodata) {
                throw { name: "NotFound" };
            }
            const educationHistories = await EducationHistory.findAll({
                where: { biodataId: biodata.id },
            });
            if (!educationHistories.length) {
                throw { name: "NotFound" };
            }
            res.status(200).json(educationHistories);
        } catch (error) {
            next(error);
        }
    }

    static async getJobHistory(req, res, next) {
        try {
            const userId = req.user.id;
            const biodata = await Biodata.findOne({ where: { userId } });
            if (!biodata) {
                throw { name: "NotFound" };
            }
            const jobHistories = await JobHistory.findAll({
                where: { biodataId: biodata.id },
            });
            if (!jobHistories.length) {
                throw { name: "NotFound" };
            }
            res.status(200).json(jobHistories);
        } catch (error) {
            next(error);
        }
    }

    static async getTrainingHistory(req, res, next) {
        try {
            const userId = req.user.id;
            const biodata = await Biodata.findOne({ where: { userId } });
            if (!biodata) {
                throw { name: "NotFound" };
            }
            const trainingHistories = await TrainingHistory.findAll({
                where: { biodataId: biodata.id },
            });
            if (!trainingHistories.length) {
                throw { name: "NotFound" };
            }
            res.status(200).json(trainingHistories);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = HistoryController;
