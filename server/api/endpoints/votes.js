const Database = require('../../core/models/Database');
const VotesModel = require('../../core/models/Votes');

module.exports = function(app) {
    app.post('/api/v1/votes', express.json(), async function(app) {
        const { name } = req.body;

        const votesModel = new VotesModel(new Database);
        
        const votes = await votesModel.createVotes(name);

        res.status(200).json({ votesId: votes.id, votesName: votes.name });
    })
}
