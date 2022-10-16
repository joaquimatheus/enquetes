const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const express = require('express');
const app = express();

process.env.TZ = 'UTC';

const logger = require('../shared/logger');

function fatalHandler(err) {
    logger.error(err, { FATAL: true });
    process.exit(1);
}

process.on('uncaughtException', fatalHandler);
process.on('unhandleRejection', fatalHandler);

app.use((req, res, next) => {
    const { ip, method, url, statusCode } = req

    const id = new Date().getTime()
    const msg = `[${ip} ${method} ${id} - receiving {${url}}]`

    logger.info(msg);

    res.on('close', () => {
        const start = new Date() - id;

        logger.info(`[${ip}{${method} ${id} - ]` + 
            `closed: ${url} ${statusCode} ${start}ms`
        )
    });

    next();
})

require('./routes')(app);

let hasInitializedServer = false;
let httpServer;


function listen() {
    httpServer = app.listen(process.env.HTTP_PORT, () => {
        if (hasInitializedServer) { return; }

        hasInitializedServer = true;
        logger.info(`it's alive http://localhost:${process.env.HTTP_PORT}`)
    }).on('error', (err) => {
        logger.error(err);
        process.exit(1);
    });
}

listen();
