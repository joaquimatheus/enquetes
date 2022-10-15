class VotesModel {
    constructor(db) {
        this.db = db;
    }

    async createVotes(name) {
        const votesRows = await this.db.knex('votes').insert({
            name
        }).returning('*');
    }
}
