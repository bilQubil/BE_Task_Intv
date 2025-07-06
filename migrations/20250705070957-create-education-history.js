"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("EducationHistories", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            biodataId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "Biodata",
                    key: "id",
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },
            educationLevel: {
                type: Sequelize.STRING,
            },
            institutionName: {
                type: Sequelize.STRING,
            },
            major: {
                type: Sequelize.STRING,
            },
            graduationYear: {
                type: Sequelize.INTEGER,
            },
            gpa: {
                type: Sequelize.FLOAT,
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
        await queryInterface.dropTable("EducationHistories");
    },
};
