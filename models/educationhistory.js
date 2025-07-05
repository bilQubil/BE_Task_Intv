"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class EducationHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      EducationHistory.belongsTo(models.Biodata, { foreignKey: "biodataId" });
    }
  }
  EducationHistory.init(
    {
      biodataId: DataTypes.INTEGER,
      educationLevel: DataTypes.STRING,
      institutionName: DataTypes.STRING,
      major: DataTypes.STRING,
      graduationYear: DataTypes.INTEGER,
      gpa: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "EducationHistory",
    }
  );
  return EducationHistory;
};
