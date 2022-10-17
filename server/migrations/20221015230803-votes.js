module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.createTable("votes", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            votes_yes: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            votes_no: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            votes_yes: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            votes_rating_1: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            votes_rating_2: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            votes_rating_3: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            votes_rating_4: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            votes_rating_5: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            votes_dynamic_1: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            votes_dynamic_2: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            votes_dynamic_3: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.dropTable("votes");
    },
};
