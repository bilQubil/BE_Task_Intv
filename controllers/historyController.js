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
                biodataId,
                educationLevel,
                institutionName,
                major,
                graduationYear,
                gpa,
            } = req.body;
            const biodata = await Biodata.findByPk(biodataId);
            if (!biodata)
                return res.status(404).json({ message: "Biodata not found" });

            const newEducationHistory = await EducationHistory.create({
                biodataId,
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
            const { biodataId, companyName, lastPosition, lastSalary, year } =
                req.body;
            const biodata = await Biodata.findByPk(biodataId);
            if (!biodata)
                return res.status(404).json({ message: "Biodata not found" });

            const newJobHistory = await JobHistory.create({
                biodataId,
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
            const { biodataId, courseName, hasCertificate, year } = req.body;
            const biodata = await Biodata.findByPk(biodataId);
            if (!biodata)
                return res.status(404).json({ message: "Biodata not found" });

            const newTrainingHistory = await TrainingHistory.create({
                biodataId,
                courseName,
                hasCertificate,
                year,
            });
            res.status(201).json(newTrainingHistory);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = HistoryController;
