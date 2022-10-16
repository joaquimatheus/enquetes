module.exports = {
  async up (queryInterface, Sequelize) {
      queryInterface.addConstraint('options', {
          fields: ['id_votes'],
          type: 'foreign key',
          references: {
              table: 'votes',
              field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade',
      });

      queryInterface.addConstraint('polls', {
          fields: ['option_id'],
          type: 'foreign key',
          references: {
              table: 'options',
              field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade',
      });
  },

  async down (queryInterface, Sequelize) {
  }
};
