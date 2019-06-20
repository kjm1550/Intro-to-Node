let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

let friends = ['Peter', 'Dylan', 'Brandan', 'Lucy'];

app.get('/', function(req, res) {
	res.render('home');
});

app.get('/friends', function(req, res) {
	res.render('friends', { friends: friends });
});

app.post('/addfriend', function(req, res) {
	let newfriend = req.body.newfriend;
	friends.push(newfriend);
	res.redirect('/friends');
});

app.listen(5500, '127.0.0.1', function() {
	console.log('server has started!');
});
