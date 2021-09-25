const express = require('express');

const Server = exports.Server = require('./lib/server');

exports.stilo = {
    
    commands: {
        
        viewer (store, options={}) {
            const server = Server(store.homeStore);
            const port = options.port || 8010;
            server.listen(port, err => {
                if (err) throw err;
                console.log(`oloViewer server listening on port ${port}`);
            });
        }
    }
};