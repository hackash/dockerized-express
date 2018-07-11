'use strict';

const layout = require('express-ejs-layouts');
const express = require('express');
const config = require('config');
const router = require('router');
const path = require('path');
const ejs = require('ejs');

module.exports.start = () => {
    /* Initiate application instance and router */
    const exRouter = express.Router();
    const app = express();

    /* Removing express header */
    app.disable('x-powered-by');

    /* Configuring view engine */
    app.engine('.html', ejs.__express);
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, config.views));

    /* Configuring layout */
    app.use(layout);

    app.use(express.static(path.join(__dirname, config.assets)));

    /* Initiate router paths within the app */
    app.use('/', exRouter);
    router.init(exRouter);

    /* Bootstrap the app */
    let port = process.env.PORT || config.port;
    app.listen(port, () => {
        console.log(`Express server in docker container listening on port ${port}`);
    });
};
