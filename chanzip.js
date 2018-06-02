var express = require('express');
var format = require('date-format');
var net = require('net');
var app = express();

var gIOSocket = null;
var gTCPSocket = null;

var gOnOff = 'OFF';
var gIntervalPing  = null;

var PING_SEC = 5000;
var DROP_SEC = 15000;

var gLastPing = 0;

var toDayte = ''
var TODAY = {};
var TOTAL = 0;
var NOWDATE = '';

app.set('view engine', 'ejs');

app.get('/', function(req,res){
	//res.render('webpages/index',{ title: 'Title of Best BITAPP' });
	NOWDATE = format.asString('yyMMdd', new Date()); //just the time
	//console.log('NOWDATE:' + NOWDATE);
	if(toDayte !== NOWDATE){
	        TODAY = null;
	        TODAY = {};
	        toDayte = NOWDATE;
	}
	clientip = (req.headers['x-forwarded-for'] || '').split(',')[0] || req.connection.remoteAddress;
	if (TODAY[clientip] != true){
	        TODAY[clientip] = true;
	}
	//console.log( 'Clientip:' + clientip + ', TODAY:' + Object.keys(TODAY).length );
	res.render(__dirname + '/index',{ visitor: Object.keys(TODAY).length,today: NOWDATE });
});

app.use(express.static(__dirname + '/'));

var server = app.listen(80, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log("Example app listening at http://%s:%s", host, port);
});

