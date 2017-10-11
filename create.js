const log = require('./log.js');
const file = 'logfile.json';
const ErrorObject = { code: 400, message: 'Request Invalid' };
let articles = require('./articles.json');

module.exports.create = function create(req, res, payload, cb) {
    if (!payload) 
    {
        cb(ErrorObject);
        return;
    }
    payload.id = Date.now();
    articles.push(payload);
    log.log(file, '/api/articles/create', payload);
    cb(null, payload, 'application/json');
}