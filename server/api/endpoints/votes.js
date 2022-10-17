const express = require("express");
const Votes = require("../../core/models/Votes");

const { buildHandler } = require("../utils");
const V = require("argument-validator");

module.exports = function (app) {
    app.post("/api/v1/votes",
        express.json(),
        buildHandler(async function (req, res) {
            const votes = await Votes.create();

            res.status(200).json({
                type: "votes",
                voteId: votes.id,
                data: votes,
                msg: "Succesfully, is created",
            });
        })
    );

    app.get("/api/v1/votes",
        express.json(),
        buildHandler(async function (req, res) {
            const votes = await Votes.findAll();

            res.status(200).json({
                type: "votes",
                voteId: votes.id,
                data: votes,
                msg: "Succesfully, all is returned",
            });
        })
    );

    app.get("/api/v1/votes/:id",
        buildHandler(async function (req, res) {
            const id = req.string("id");

            const vote = await Votes.findByPk(id);

            res.status(200).json({
                type: "votes",
                voteId: vote.id,
                data: vote,
                msg: "Succesfully, is returned",
            });
        })
    );

    app.put("/api/v1/votes/:id",
        express.json(),
        buildHandler(async function (req, res) {
            req.json(req.body);

            const id = req.string("id");
            const changes = req.arg("changes");

            const votes = Votes.update(changes, { where: { id } });

            res.status(200).json({
                type: "votes",
                voteId: id,
                data: changes,
                msg: "The votes row is updated",
            });
        })
    );

    app.delete("/api/v1/votes/:id",
        buildHandler(async function (req, res) {
            const id = req.string('id');

            const vote = await Votes.destroy({
                where: {id}
            });

            if (vote) {
                res.status(200).json({
                    type: 'Votes',
                    voteId: id,
                    msg: 'The votes data is deleted'
                })
            } else {
                res.status(404).json({
                    type: 'Votes',
                    votedId: id,
                    msg: 'Not found',
                })
            }
        })
    )
};
