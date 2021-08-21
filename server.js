// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204


// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// Friendly API get
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});



function recieve_date(req, res) {
  let cur_date = new Date(req.params.date);



  let unix_time = cur_date.getTime();
  let string_time = cur_date.toUTCString();

  res.json({
    "utc": string_time,
    "unix": unix_time
  });
}


app.get("/api/:date?", recieve_date)

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
