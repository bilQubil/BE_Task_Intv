"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("JobHistories", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            biodataId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                unique: true,
                references: {
                    model: "Biodata",
                    key: "id",
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },
            companyName: {
                type: Sequelize.STRING,
            },
            lastPosition: {
                type: Sequelize.STRING,
            },
            lastSalary: {
                type: Sequelize.INTEGER,
            },
            year: {
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
        await queryInterface.dropTable("JobHistories");
    },
};
