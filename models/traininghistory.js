"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TrainingHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TrainingHistory.belongsTo(models.Biodata, { foreignKey: "biodataId" });
    }
  }
  TrainingHistory.init(
    {
      biodataId: DataTypes.INTEGER,
      courseName: DataTypes.STRING,
      hasCertificate: DataTypes.BOOLEAN,
      year: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "TrainingHistory",
    }
  );
  return TrainingHistory;
};
