(function(){
	// console.log('Start');
	// console.log('click btn');
	// var url = "http://localhost:3000/places";
	// $.ajax(url).done(ajaxDone).fail(ajaxFailed);
	$.ajax({
		url: "http://api.openweathermap.org/data/2.5/weather?q=Toulouse,France&appid=48b208710333f43248240ee7fbd57077&lang=fr&units=metric",
		success: function(data){
			// var meteo = JSON.parse(body);
			var temp = data.main.temp;
			var humidity = data.main.humidity;
			$('#meteo').append('a Toulouse il fait ' + temp + '&#176;C et il y a ' + humidity + "% d'humidit&#233e");
		}
	});

})();

// function ajaxDone(data, status){
// 	console.log('done', data);
// 	var places = data.places;
// 	console.log(places);

// 	for(var i=0; i<places.length; i++){
// 		var place = places[i];
// 		var newElement = "<li>" + place.nom +"</li>";

// 		if(place.nom === "IoT Valley"){
// 			var motDePasse = place.password;
// 			$('body').append('Mot de passe: ' + motDePasse);
// 		}

// 		$('#list').append(places);
// 	}
// };

// function ajaxFailed(){
// 	console.log('failed');

// };
