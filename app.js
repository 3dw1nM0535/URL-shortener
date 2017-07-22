var express = require('express');
var mongo = require('mongodb').MongoClient;
var valiUrl =  require('valid-url');
var shortId = require('shortid');

var app = express();

//Static files Middleware
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "index.html");
});

app.get('/:url(*)', (req, res) => {
  var url = req.params.url;
  if (url.)
});

app.listen(3000, '127.0.0.1', () => {
  console.log("Server listening on port 3000!");
});