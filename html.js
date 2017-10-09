const log = require('./log.js');
const file = 'logfile.json';
//const indexHtml = require('./public/index.html');
const fs = require('fs');

module.exports.getIndexHtml = (req, res, payload, cb) => {
    //console.log(indexHtml);
    log.log(file, '/', payload);
    fs.readFile('./public/index.html', (err, data) => {
        if (err) console.error(err);
        else 
        {
            console.log(data);
            cb(null, data, 'text/html');
        }
    })
}
module.exports.getFormHtml = (req, res, payload, cb) => {
    log.log(file, '/', payload);
    fs.readFile('./public/form.html', (err, data) => {
        if (err) console.error(err);
        else 
        {
            console.log(data);
            cb(null, data, 'text/html');
        }
    })
}
