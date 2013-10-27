var http = require('http');

require('../js/point.js');
require("../js/numbers.js");
require("../js/graph_wrapper.js");
require("../js/node_parser.js");
require("../js/node_finder.js");
require("../js/move_validator.js");
require("../js/player.js");
require("../js/position_calculator.js");
require("../js/game.js");

// var game = new Game(1);

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	if (req['url'] == '/') {
		res.end('Hello Node.js\n');
	}
	else if (req['url']=='/init') {
        res.end('OK!');       
	}
}).listen(9292);

console.log('OMG this is the kartchester server!');
