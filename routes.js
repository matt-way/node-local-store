
var Storage = require('./storage');

module.exports = function(app){

	app.get('/load/:key', Storage.load);
	app.post('/save/:key', Storage.save);
};