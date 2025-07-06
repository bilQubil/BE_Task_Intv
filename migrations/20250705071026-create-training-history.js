"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("TrainingHistories", {
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
            courseName: {
                type: Sequelize.STRING,
            },
            hasCertificate: {
                type: Sequelize.BOOLEAN,
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
        await queryInterface.dropTable("TrainingHistories");
    },
};
