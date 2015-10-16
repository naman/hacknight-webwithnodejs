var express = require('express');
var path = require('path');
var formidable = require('formidable');
var fs = require('fs');

var app = express();

//provides root
app.set('views', path.join(__dirname, './views'));

app.get('/', function(req, res){
	console.log("GET request");
	res.sendFile(path.join(__dirname, './views', 'index.html'));
});


app.post('/upload', function(req, res){
	console.log("POST request!");

	var form = new formidable.IncomingForm();
	form.parse(req, function(err, fields, files){
		// console.log(files);
		var temp_path = files.thumbnail.path;
		var target_path = './uploads/' + files.thumbnail.name;

		//moves file from temp to intended location
		fs.rename(temp_path, target_path, function(err){
			if(err) throw err;

			fs.unlink(temp_path, function(){
				if (err) throw err;
				//redirects after copying from the server
				res.redirect('back');
			});
		});

		//res.redirect('back');
		//this statement here would execute even before the file is uploaded to the server
		//because it is being executed asynchronously. So before the file gets uploaded, the redirect
		//takes us back to the same page. The file won't get uploaded! (as file upload would take more time than redirect)
	});
});


//app actively listens on port 8000
//callback function passed as an argument. Function (anon) takes request and response as arguments
var server = app.listen(3000, function(req, res){
	console.log("Service is running at port 3000");
});