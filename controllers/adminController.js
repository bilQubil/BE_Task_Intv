const { Biodata } = require("../models");

class AdminController {
    // GET /admin/biodata
    static async getBiodata(req, res, next) {
        try {
            const biodata = await Biodata.findAll();
            res.json(biodata);
        } catch (error) {
            next(error);
        }
    }
    // GET /admin/biodata/:id
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
    // PUT /admin/biodata/:id
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
    // DELETE /admin/biodata/:id
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
}

module.exports = AdminController;
