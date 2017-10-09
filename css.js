const log = require('./log.js');
const file = 'logfile.json';
//const indexHtml = require('./public/index.html');
const fs = require('fs');

module.exports.getSiteCSS = (req, res, payload, cb) => {
    //console.log(indexHtml);
    log.log(file, '/', payload);
    fs.readFile('./public/site.css', (err, data) => {
        if (err) console.error(err);
        else {
            console.log(data);
            cb(null, data, 'text/css');
        }
    })
}
