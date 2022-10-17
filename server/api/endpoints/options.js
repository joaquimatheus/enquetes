const express = require("express");
const Options = require("../../core/models/Options");

const { buildHandler} = require("../utils");
const { isEmpty } = require('../utils');

const V = require("argument-validator");

module.exports = function (app) {
    app.post("/api/v1/options",
        express.json(),
        buildHandler(async function (req, res) {
            let optionsChange;

            if(!(isEmpty(req.body))) {
                optionsChange = req.json(req.body);
            }

            console.log(optionsChange);

            const options = await Options.create(optionsChange || {});

            res.status(200).json({
                type: "options",
                optionsId: options.id,
                data: options,
                msg: "Succesfully new options is created",
            });
        })
    );

    app.get("/api/v1/options",
        buildHandler(async function (req, res) {
            const options = await Options.findAll();

            res.status(200).json({
                type: 'options',
                optionsId: options.id,
                data: options,
                msg: 'Succesfully, the data all returned'
            });
        })
    );

    app.get("/api/v1/options/:id",
        buildHandler(async function (req, res) {
            const id = req.string('id');

            const options = await Options.findByPk(id);

            res.status(200).json({
                type: 'options',
                optionsId: id,
                data: options,
                msg: 'Succesfully, is returned'
            });
        })
    );

    app.put("/api/v1/options/:id",
        express.json(),
        buildHandler(async function (req, res) {
            req.json(req.body);

            const id = req.string('id');
            const changes = req.arg("changes");

            const options = await Options.update(changes, { where: { id } });

            res.status(200).json({
                type: "options",
                optionsId: id,
                data: changes,
                msg: "The options row is updated"
            })
        })
    );

    app.delete("/api/v1/options/:id",
        buildHandler(async function (req, res) {
            const id = req.string('id');

            const options = await Options.destroy({
                where: {id}
            });

            if (options) {
                res.status(200).json({
                    type: 'options',
                    optionsId: id,
                    msg: 'The option data is deleted'
                })
            } else {
                res.status(404).json({
                    type: 'options',
                    optionsid: id,
                    msg: 'Not found',
                })
            }
        })
    );
};
