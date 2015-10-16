var app = require('express')();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {
  console.log('Example app listening at http://%s:%s', host, port);
});