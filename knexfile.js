const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

module.exports = {
    development: {
        client: 'mysql',
        connection: {
            host: process.env.DB_HOST,
            database: process.env.DB_DATABASE,
            port: process.env.DB_PORT,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD
        },
        pool: { min: 2, max: 7 },
        migrations: {
            directory: './server/migrations/'
        }
    }
};
