require("../../../dotenv");
const { Model, DataTypes, Sequelize } = require("sequelize");

const sequelize = require("../../sequelize");

class Polls extends Model {}

Polls.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: Sequelize.TEXT,
        unique: true,
        allowNull: false,
    },
    option_id: {
        type: Sequelize.INTEGER,
        references: {
            model: "options",
            key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
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
}, {
    sequelize,
    modelName: "polls",
    timestamps: true,
});

module.exports = Polls;
