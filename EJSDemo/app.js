let express = require('express');
let app = express();

app.get('/', function(req, res) {
	res.render('home.ejs');
});

app.get('/fallinlovewith/:thing', function(req, res) {
	let thing = req.params.thing;

	res.render('love.ejs', { thingVar: thing });
});

app.listen(5500, '127.0.0.1', function() {
	console.log('server has started!');
});
