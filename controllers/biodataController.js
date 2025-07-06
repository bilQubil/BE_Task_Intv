const {
    Biodata,
    EducationHistory,
    JobHistory,
    TrainingHistory,
    sequelize,
} = require("../models");

class BiodataController {
    static async getBiodata(req, res, next) {
        try {
            const userId = req.user.id;
            const biodata = await Biodata.findOne({ where: { userId } });
            if (!biodata)
                return res.status(404).json({ message: "Biodata not found" });
            res.json(biodata);
        } catch (error) {
            next(error);
        }
    }

    static async postBiodata(req, res, next) {
        try {
            const userId = req.user.id;
            const {
                position,
                fullName,
                ktpNumber,
                birthPlace,
                birthDate,
                gender,
                religion,
                bloodType,
                maritalStatus,
                ktpAddress,
                livingAddress,
                email,
                phone,
                emergencyContact,
                skills,
                placementWillingness,
                expectedSalary,
            } = req.body;

            if (
                !position ||
                !fullName ||
                !ktpNumber ||
                !birthPlace ||
                !birthDate ||
                !gender ||
                !religion ||
                !bloodType ||
                !maritalStatus ||
                !ktpAddress ||
                !livingAddress ||
                !email ||
                !phone ||
                !emergencyContact ||
                !skills ||
                placementWillingness === undefined ||
                !expectedSalary
            ) {
                return res.status(400).json({
                    message: "Required fields missing",
                });
            }

            const newBiodata = await Biodata.create({
                userId,
                position,
                fullName,
                ktpNumber,
                birthPlace,
                birthDate,
                gender,
                religion,
                bloodType,
                maritalStatus,
                ktpAddress,
                livingAddress,
                email,
                phone,
                emergencyContact,
                skills,
                placementWillingness,
                expectedSalary,
            });

            res.status(201).json(newBiodata);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = BiodataController;
