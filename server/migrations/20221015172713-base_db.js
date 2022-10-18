module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.createTable("polls", {
            id: {
                type: Sequelize.INTEGER,
                primarykey: true,
                autoIncrement: true,
            },
            title: {
                type: Sequelize.TEXT,
                unique: true,
                allowNull: false,
            },
            option_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            type_poll: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            time_start: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            time_end: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            state_options: {
                type: Sequelize.ENUM("not-init", "in-progress", "finished"),
            },
            status: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            option_id: {
                type: Sequelize.INTEGER,
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
        return queryInterface.dropTable("polls");
    },
};
