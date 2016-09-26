var Path = require('path');
var rimraf = require('rimraf');
var mkdirp = require('mkdirp');


var dataPath = Path.normalize(__dirname + '/../public');

console.log('====== cleaning up =======');

rimraf(dataPath, function(error) {
    if (error) console.error(error);
    else console.log('public folder deleted.')

    mkdirp(dataPath, function (err) {
        if (err) console.error(err)
        else console.log('public folder created.');
        console.log('=== clean up completed ===');
    });
});
