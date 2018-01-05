'use strict';

const express = require('express');
const config = require('config');
const router = require('router');

module.exports.start = () => {
    /* Initiate application instance and router */
    const exRouter = express.Router();
    const app = express();

    /* Removing express header */
    app.disable('x-powered-by');

    /* Initiate router paths within the app */
    app.use('/', exRouter);
    router.init(exRouter);

    /* Bootstrap the app */
    let port = process.env.PORT || config.port;
    app.listen(port, () => {
        console.log(`Express server in docker container listening on port ${port}`);
    });
};
