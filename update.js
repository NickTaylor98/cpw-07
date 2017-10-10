const log = require('./log.js');
const file = 'logfile.json';
const ErrorObject = { code: 400, message: 'Request Invalid' };
let articles = require('./articles.json');

module.exports.update = function update(req, res, payload, cb) {
    if (!payload || !payload.id) 
    {
        cb(ErrorObject);
        return;
    }
    let index;
    if ((index = articles.findIndex(i => i.id == payload.id)) != -1) {
        articles.splice(index, 1, payload);
        log.log(file, '/api/articles/update', payload);
        cb(null, articles[index], 'application/json');
    }
    else cb(ErrorObject);
}