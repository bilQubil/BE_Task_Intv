const { tokenVerif } = require("../helpers/jwt");
const { User } = require("../models");

async function authentication(req, res, next) {
    try {
        const headers = req.headers.authorization;

        if (!headers || !headers.startsWith("Bearer ")) {
            throw { name: "Unauthenticated" };
        }
        const token = headers.split(" ")[1];

        const decodedToken = tokenVerif(token);

        const user = await User.findByPk(decodedToken.id);
        if (!user) {
            throw { name: "Unauthenticated" };
        }
        req.user = user;
        next();
    } catch (error) {
        next(error);
    }
}

async function isAdmin(req, res, next) {
    try {
        if (!req.user.isAdmin) {
            throw { name: "Forbidden" };
        }
        next();
    } catch (error) {
        next(error);
    }
}

module.exports = { authentication, isAdmin };
