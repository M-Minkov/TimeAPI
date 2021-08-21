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


/* Handling date or UNIX entry into /api/:date?
If input is empty "", it returns the current date in UTC and UNIX form
If given a valid date, returns that dates UTC and UNIX form
If given an invalid date, returns only an error "Invalid Date"
All output is given in JSON format
*/
function recieve_date(req, res) {
  let unix_time;
  let string_time;
  let date_to_return;
  let given_date = req.params.date;

  // if no input was given, we take the current date
  if(given_date == undefined) {
    date_to_return = new Date();
  }

  // Valid input checking. Checking to see if a valid date was given,
  // other wise we return "Invalid Date".
  // Both normal dates (21/08/2021) and UNIX time (123) are accepted.
  else {
    if(!isNaN(given_date)) {
      given_date = parseInt(given_date);
    }
    date_to_return = new Date(given_date);
    if(date_to_return.toString() == "Invalid Date") {
      res.json({ "error" : "Invalid Date" });
      return;
    }
  }

  string_time = date_to_return.toUTCString();
  unix_time = date_to_return.getTime();
  res.json({
    "utc": string_time,
    "unix": unix_time
  });
}


app.get("/api/:date?", recieve_date);

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
