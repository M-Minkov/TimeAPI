# TimeAPI_Project
 Project inspired by FreeCodeCamp, creating a time-stamp API microservice.
 
 Pass a date into the /api/:date? parameter, to call a GET request, which will return a JSON file containing:
 
 
 The date in UTC format, and UNIX time.
 
 
 Calling: http://localhost:3000/api/2015-12-25
 
 
 for example, yields:
 
 
 {"utc":"Fri, 25 Dec 2015 00:00:00 GMT","unix":1451001600000}
