
var fs = require('fs');

var loc = process.ENV. './store/';

exports.save = function(req, res, next){

	var key = req.params.key;

	var stream = fs.createWriteStream(loc + key);
	req.pipe(stream);
	req.on('end', function(){
		return res.json({ success: true });
	});
};

exports.load = function(req, res, next){

	var key = req.params.key;

	var stream = fs.createReadStream(loc + key);
	stream.pipe(res);
};