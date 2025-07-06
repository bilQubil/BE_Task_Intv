const { Biodata } = require("../models");

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
            const newBiodata = await Biodata.create({ ...req.body, userId });
            res.status(201).json(newBiodata);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = BiodataController;
