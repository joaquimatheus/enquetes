const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const express = require('express');
const app = express();

process.env.TZ = 'UTC';

function fatalHandler(err) {
    console.log(err, { FATAL: true });
    process.exit(1);
}

process.on('uncaughtException', fatalHandler);
process.on('unhandleRejection', fatalHandler);

require('./routes')(app);

let hasInitializedServer = false;
let httpServer;

function listen() {
    httpServer = app.listen(process.env.HTTP_PORT, () => {
        if (hasInitializedServer) { return; }

        hasInitializedServer = true;
        console.log(`it's alive http://localhost:${process.env.HTTP_PORT}`)
    }).on('error', (err) => {
        console.log(err);
        process.exit(1);
    });
}

listen();
