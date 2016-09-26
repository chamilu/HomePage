'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({port: 2500});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Testing...');
    }
})

server.start((err) => {
    if(err){
        throw err;
    }

    console.log('server is running');
});
