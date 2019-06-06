const express = require('express');
const app = express();

app.get('/', function(req, res) {
	res.send('Hi ther, welcome to my assignment!');
});

app.get('/speak/:animal', function(req, res) {
	let animal = req.params.animal;
	let sound = 'its sound';
	if (animal == 'pig') {
		sound = 'Oink';
	} else if (animal == 'dog') {
		sound = 'Woof Woof';
	} else if (animal == 'cow') {
		sound = 'Moo';
	} else if (animal == 'cat') {
		sound = 'Meow';
	} else if (animal == 'snake') {
		sound = 'sssssss';
	}
	res.send('The ' + animal + ' says ' + sound + '!');
});

app.get('/repeat/:word/:number', function(req, res) {
	let wordToSay = req.params.word;
	let timeToSay = parseInt(req.params.number);
	let newWord = wordToSay;
	for (x = 1; x < timeToSay; x++) {
		newWord += ' ' + wordToSay;
	}
	res.send(newWord);
});

app.get('*', function(req, res) {
	res.send('Sorry, page not found.');
});

// tell express to listen for request
app.listen(5500, '127.0.0.1', function() {
	console.log('server has started!');
});
