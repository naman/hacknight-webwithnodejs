var express = require('express'), 
	app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

var server = app.listen(3000, function () {
  console.log('Example app listening');
});