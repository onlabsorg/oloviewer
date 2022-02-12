const express = require('express');
const http = require('http');
const olo = require('@onlabsorg/olojs');


module.exports = function (store) {
    const app = express();
    app.use('/docs', olo.HTTPServer.createMiddleware(store));
    app.use( express.static(`${__dirname}/../dist`) );
    return http.createServer(app);
}