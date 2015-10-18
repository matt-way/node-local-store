
var express = require('express'),
	cors = require('cors'),
	errorHandler = require('errorhandler');	

var	app = express();

app.use(cors());
app.use(errorHandler());

// setup routes
require('./routes')(app);

var port = process.env.PORT || 3000;

// setup server
app.listen(port, function(){
	console.log('Storage API listening on port ' + port);
});