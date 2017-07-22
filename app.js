var express = require('express');

var app = express();

//Static files Middleware
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "index.html");
});

app.listen(3000, '127.0.0.1', () => {
  console.log("Server listening on port 3000!");
});