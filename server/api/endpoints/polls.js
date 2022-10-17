const express = require("express");
const Polls = require("../../core/models/Polls");

const { buildHandler} = require("../utils");
const { isEmpty } = require('../utils');

const V = require("argument-validator");

module.exports = function (app) {
    app.post("/api/v1/polls",
        express.json(),
        buildHandler(async function (req, res) {
            let pollsChange;

            if(!(isEmpty(req.body))) {
                pollsChange = req.json(req.body);
            } else {
                return;
            }

            const polls = await Polls.create(pollsChange);

            res.status(200).json({
                type: "polls",
                pollsId: polls.id,
                data: polls,
                msg: "Succesfully new polls is created",
            });
        })
    );

    app.get('/api/v1/polls', 
        buildHandler(async function (req, res) {
            let polls = await Polls.findAll();

            res.status(200).json({
                type: "polls",
                pollsId: polls.id,
                data: polls,
                msg: "Succesfully alls polls is returned",
            });
        })
    );

    app.get('/api/v1/polls/:id', 
        buildHandler(async function (req, res) {
            const id = req.string('id');
            console.log(id);
            let poll = await Polls.findByPk(id);

            res.status(200).json({
                type: 'polls',
                pollsId: poll.id,
                data: poll,
                msg: 'Succesfully, it returned'
            });
        })
    );

    app.put("/api/v1/polls/:id", 
        express.json(),
        buildHandler(async function (req, res) {
            req.json(req.body);

            const id = req.string('id');
            const changes = req.arg("changes");

            const polls = await Polls.update(changes, { where: { id } });

            res.status(200).json({
                type: 'polls',
                pollsId: id,
                data: changes,
                msg: "The polls row is updated"
            });
        })
    );

    app.delete("/api/v1/polls/:id", 
        buildHandler(async function (req, res) {
            const id = req.string('id');

            const polls = await Polls.destroy({
                where: { id }
            });

            if (polls) {
                res.status(200).json({
                    type: 'polls',
                    pollsId: id,
                    msg: 'The polls is deleted'
                })
            } else {
                res.status(404).json({
                    type: 'polls',
                    pollsId: id,
                    msg: "Not found"
                })
            }
        })
    );

}
