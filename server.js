'use strict';

const Hapi = require('hapi');
const Inert = require('inert');
const Path = require('path');

const server = new Hapi.Server({
    connections: {
        routes: {
            files: {
                relativeTo: Path.join(__dirname, 'app')
            }
        }
    }
});

console.log(process.env.PORT)

server.connection({port: process.env.PORT || 2500});
server.register(Inert, () => {});

server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: '.',
            redirectToSlash: true,
            index: true
        }
    }
});

server.start((err) => {
    if(err){
        throw err;
    }

    console.log('server is running', server.info.uri);
});
