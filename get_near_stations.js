//call 'getNearestStation' method from your webpage
//implement useStationName method
function getNearestStation(position){
	checkGeoLocation();
	var lat = position.coords.latitude;
	var lon = position.coords.longitude;
	var apiUrl = "http://map.simpleapi.net/stationapi?";
	var url = apiUrl + "y=" + lat + "&x=" + lon + "&output=xml";
	$.get(url, function(r, stationName){
		var tmp = $.parseXML(r.responseText);
		$xml = $(tmp);
		var station = $xml.find("name").text();
		var stations = station.replace(/駅/g, "駅," );
		stationName = stations;
		useStationName(stationName);
	});
}
function useStationName(name)
{
	//you should implement method with using near station name 
	alert(name);
}

function isError( error )
{
	alert( errorMessage[error.code] ) ;
	console.log("error with code:"+error.code);
}
function checkGeoLocation(){
	if( navigator.geolocation )
	{
		navigator.geolocation.getCurrentPosition(getNearestStation, isError);
	}
	else
	{
		console.log("cannot use geolocation because of machine");
	}
}

