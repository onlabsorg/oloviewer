const olo = require('@onlabsorg/olojs');

module.exports = {
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'oloViewer',
        },
    },

    transpileDependencies: [
        'vuetify'
    ],

    devServer: {
        
        before (app) {
            const express = require('express');
            const rootStore = new olo.FileStore(`${__dirname}/test/root-store`);
            app.use('/docs', olo.HTTPServer.createMiddleware(rootStore));
        }
    }
}
