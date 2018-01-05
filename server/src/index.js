'use strict';

const express = require('express');
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
    app.listen(3000, () => {
        console.log('listening on 3000');
    });
};
