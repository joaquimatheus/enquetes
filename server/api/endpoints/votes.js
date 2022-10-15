const express = require('express');

module.exports = function(app) {
    app.post('/api/v1/votes', express.json(), async function(req, res) {
        const { name } = req.body;

        console.log(name);

        res.status(200).json({ votesId: name, votesName: name });
    });

    app.get('/api/v1/votes', express.json(), async function(req, res) {

        res.status(200).json({
            votes: votes
        })
    })
}
