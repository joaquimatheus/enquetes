require('../../../dotenv');
const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = require('../../sequelize');

class Votes extends Model {}

Votes.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    votes_yes: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    votes_no: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    votes_yes: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    votes_rating_1: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    votes_rating_2: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    votes_rating_3: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    votes_rating_4: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    votes_rating_5: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    votes_dynamic_1: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    votes_dynamic_2: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    votes_dynamic_3: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
}, {
    sequelize,
    modelName: 'votes',
    timestamps: true
});

module.exports = Votes;
