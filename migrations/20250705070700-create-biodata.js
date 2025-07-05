"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Biodata", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      position: {
        type: Sequelize.STRING,
      },
      fullName: {
        type: Sequelize.STRING,
      },
      ktpNumber: {
        type: Sequelize.STRING,
      },
      birthPlace: {
        type: Sequelize.STRING,
      },
      birthDate: {
        type: Sequelize.DATE,
      },
      gender: {
        type: Sequelize.STRING,
      },
      religion: {
        type: Sequelize.STRING,
      },
      bloodType: {
        type: Sequelize.STRING,
      },
      maritalStatus: {
        type: Sequelize.STRING,
      },
      ktpAddress: {
        type: Sequelize.TEXT,
      },
      livingAddress: {
        type: Sequelize.TEXT,
      },
      email: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      emergencyContact: {
        type: Sequelize.STRING,
      },
      skills: {
        type: Sequelize.TEXT,
      },
      placementWillingness: {
        type: Sequelize.STRING,
      },
      expectedSalary: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Biodata");
  },
};
