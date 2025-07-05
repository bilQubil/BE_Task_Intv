"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Biodata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Biodata.belongsTo(models.User, { foreignKey: "userId" });
      Biodata.hasMany(models.EducationHistory, { foreignKey: "biodataId" });
      Biodata.hasMany(models.TrainingHistory, { foreignKey: "biodataId" });
      Biodata.hasMany(models.JobHistory, { foreignKey: "biodataId" });
    }
  }
  Biodata.init(
    {
      userId: DataTypes.INTEGER,
      position: DataTypes.STRING,
      fullName: DataTypes.STRING,
      ktpNumber: DataTypes.STRING,
      birthPlace: DataTypes.STRING,
      birthDate: DataTypes.DATE,
      gender: DataTypes.STRING,
      religion: DataTypes.STRING,
      bloodType: DataTypes.STRING,
      maritalStatus: DataTypes.STRING,
      ktpAddress: DataTypes.TEXT,
      livingAddress: DataTypes.TEXT,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      emergencyContact: DataTypes.STRING,
      skills: DataTypes.TEXT,
      placementWillingness: DataTypes.STRING,
      expectedSalary: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Biodata",
    }
  );
  return Biodata;
};
