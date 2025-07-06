"use strict";
const { Model } = require("sequelize");
const { hashPass } = require("../helpers/bcrypt");

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            User.hasOne(models.Biodata, { foreignKey: "userId" });
        }
    }
    User.init(
        {
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            isAdmin: DataTypes.BOOLEAN,
        },
        {
            sequelize,
            hooks: {
                beforeCreate(user) {
                    user.password = hashPass(user.password);
                },
            },
            modelName: "User",
        }
    );
    return User;
};
