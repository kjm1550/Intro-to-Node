const express = require('express');
const app = express();

// '/' => 'Hi there!'
app.get('/', function(req, res) {
	res.send('Hi there!');
	console.log('request to /');
});

// '/bye' => 'Goodbye!'
app.get('/bye', function(req, res) {
	res.send('Goodbye!');
	console.log('request to /bye');
});

//'/dog' => 'Meow!'
app.get('/dog', function(req, res) {
	res.send('Meow!');
	console.log('request to /dog');
});

//
app.get('/r/:subredditName', function(req, res) {
	let subreddit = req.params.subredditName;
	res.send('Welcome to the ' + subreddit + ' subreddit');
	console.log('request to /r/ ' + subreddit);
});

// a star or catch all for routes not specified above
app.get('*', function(req, res) {
	res.send('You are a star!');
	res.send('404 page not found!');
});

// tell express to listen for request
app.listen(5500, '127.0.0.1', function() {
	console.log('server has started!');
});
