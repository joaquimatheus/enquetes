module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.addColumn('votes', 'all_votes', Sequelize.INTEGER)
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.removeColumn('votes', 'all_votes')
    },
};
