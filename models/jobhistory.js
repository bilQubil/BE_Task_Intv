"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class JobHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      JobHistory.belongsTo(models.Biodata, { foreignKey: "biodataId" });
    }
  }
  JobHistory.init(
    {
      biodataId: DataTypes.INTEGER,
      companyName: DataTypes.STRING,
      lastPosition: DataTypes.STRING,
      lastSalary: DataTypes.INTEGER,
      year: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "JobHistory",
    }
  );
  return JobHistory;
};
