require('../../../dotenv');
const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = require('../../sequelize');

class Options extends Model {}

Options.init({
    id: {
        type: Sequelize.DataTypes,
        primaryKey: true,
        autoIncrement: true,
    },
    yes_option: {
        type: Sequelize.TEXT,
        defaultValue: 'Sim'
    },
    no_option: {
        type: Sequelize.TEXT,
        defaultValue: "Não",
    },
    name_dynamic_1: {
        type: Sequelize.TEXT,
        defaultValue: 'Sim',
    },
    name_dynamic_2: {
        type: Sequelize.TEXT,
        defaultValue: "Não",
    },
    name_dynamic_3: {
        type: Sequelize.TEXT,
        defaultValue: 'Talvez',
    },
    name_rating_1: {
        type: Sequelize.TEXT,
        defaultValue: 'Totalmente discordo'
    },
    name_rating_2: {
        type: Sequelize.TEXT,
        defaultValue: 'Discordo'
    },
    name_rating_3: {
        type: Sequelize.TEXT,
        defaultValue: 'Neutro'
    },
    name_rating_4: {
        type: Sequelize.TEXT,
        defaultValue: 'Concordo'
    },
    name_rating_5: {
        type: Sequelize.TEXT,
        defaultValue: 'Totalmente concordo'
    },
    id_votes: {
        type: Sequelize.INTEGER,
        references: {
            model: 'votes',
            key: 'id',
        }
    },
}, {
    sequelize,
    modelName: 'options',
    timestamps: true
});

(async() => {
    const option = await Options.create(
        {name_dynamic_1: 'Totalmente', name_dynamic_2: 'Discordo', name_dynamic: 'Nao tenho muita certeza', id_votes: 1}
    )

    console.log(option);
})()

module.exports = Options
