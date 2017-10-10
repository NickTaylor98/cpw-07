const log = require('./log.js');
const file = 'logfile.json';
//const indexHtml = require('./public/index.html');
const fs = require('fs');

module.exports.getAppJS = (req, res, payload, cb) => {
    //console.log(indexHtml);
    log.log(file, '/', payload);
    fs.readFile('./public/app.js', (err, data) => {
        if (err) console.error(err);
        else 
        {
            console.log(data);
            cb(null, data, 'application/javascript');
        }
    })
}
module.exports.getFormJS = (req, res, payload, cb) => {
    log.log(file, '/', payload);
    fs.readFile('./public/form.js', (err, data) => {
        if (err) console.error(err);
        else 
        {
            console.log(data);
            cb(null, data, 'application/javascript');
        }
    })    
}

module.exports.getJquery = (req, res, payload, cb) => {
    log.log(file, '/', payload);
    fs.readFile('./public/jquery.min.js', (err, data) => {
        if (err) console.error(err);
        else 
        {
            console.log(data);
            cb(null, data, 'application/javascript');
        }
    })    
}
