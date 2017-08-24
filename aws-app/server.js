var express = require('express');
var app = express();

app.use(express.static("app"));
app.use(
  '/bower_components',
  express.static('./bower_components'));

// app.get('/', function (req, res) {
//   res.redirect('/');
// });

app.get('*', function(request, response, next) {
  response.sendfile(__dirname + '/index.html');
});


app.listen(5000, 'localhost');
console.log("list App :  Server is Listening on port 5000");
