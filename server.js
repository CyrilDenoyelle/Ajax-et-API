var express = require('express');
var app = express();


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
	var meteoUrl = 	"http://api.openweathermap.org/data/2.5/weather?q=Toulouse,France&appid=48b208710333f43248240ee7fbd57077&lang=fr&units=metric"
	require('request').get(meteoUrl, function(err, response, body){
		var meteo = JSON.parse(body);
		res.send(meteo)
	})

});

// app.get('/:name', function(){
// 	.redirect()
// })

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
