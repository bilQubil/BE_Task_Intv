const { User } = require("../models");
const { tokenSign } = require("../helpers/jwt");
const { comparePass } = require("../helpers/bcrypt");

class AuthController {
    static async postRegister(req, res, next) {
        try {
            const { email, password } = req.validatedData;

            const existingUser = await User.findOne({ where: { email } });
            if (existingUser) {
                throw {
                    name: "ValidationError",
                    message: "Email already registered",
                };
            }

            const userNew = await User.create({
                email,
                password,
                isAdmin: false,
            });

            res.status(201).json({
                message: "User registered successfully",
                user: {
                    id: userNew.id,
                    email: userNew.email,
                    isAdmin: userNew.isAdmin,
                },
            });
        } catch (error) {
            next(error);
        }
    }

    static async postLogin(req, res, next) {
        try {
            const { email, password } = req.validatedData;
            const user = await User.findOne({
                where: { email },
            });
            if (!user) {
                throw {
                    name: "AuthenticationError",
                };
            }

            const isValidPassword = comparePass(password, user.password);
            if (!isValidPassword) {
                throw {
                    name: "AuthenticationError",
                };
            }

            const payload = {
                id: user.id,
                email: user.email,
                isAdmin: user.isAdmin,
            };

            const token = tokenSign(payload);

            res.status(200).json({
                message: "Login successful",
                access_token: token,
                user: {
                    id: user.id,
                    email: user.email,
                    isAdmin: user.isAdmin,
                },
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = AuthController;
