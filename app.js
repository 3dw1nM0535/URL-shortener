var express = require('express');
var mongo = require('mongodb').MongoClient;
var validUrl =  require('valid-url');
var shortId = require('shortid');
var port = process.env.PORT || 3000;
var dbUrl = "mongodb://url-shorter:@03167TuK2014@ds031597.mlab.com:31597/url-shortener";

var app = express();

//Static files Middleware
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "index.html");
});

app.get('/new/:url(*)', (req, res) => {
  var url = req.params.url;
  if (validUrl.isUri(url)) {
    mongo.connect(dbUrl, (err, db) => {
      if(err) {
        res.send("Connection to the database was lost! Please try later");
        return console.log(err);
      } else {
        var urlList = db.collection('urls');
        var short = shortId.generate();
        urlList.insert({url: url, short: short}, () => {
          var data = {
            originalUrl: url,
            shortUrl: 'http://' + req.headers['host'] + '/' + short,
          }
          db.close();
          res.send(data);
        });
      }
    });
  } else {
    var data = {
      error: 'Please check your input for mistakes',
    }
    res.json(data);
  }
});

app.get('/:value', (req, res) => {
  var value = req.params.value;
  mongo.connect(dbUrl, (err, db) => {
    if (err) {
      return console.log(err);
    } else {
      
    }
  });
});

app.listen(port, '127.0.0.1', () => {
  console.log("Server listening on port 3000!");
});