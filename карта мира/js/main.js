$(document).ready(function() {

	AmCharts.theme = AmCharts.themes.chalk;
	AmCharts.ready(function() {
	    var map = AmCharts.makeChart("chartdiv", {
			"type": "map",
			"theme": "chalk",
			"language": "ru",
			"zoomControl": false,
			"zoomOnDoubleClick": false, 
			"dataProvider": {
				"map": "worldLow",
			    "getAreasFromMap": true
			},
			"zoomControl": {
				"zoomControlEnabled": false,
				"homeButtonEnabled" : false
			}
		});
	    map.write("mapdiv");
	    
	    var path = AmCharts.maps.worldLow;
		var obj = path.svg.g.path;
		for (var key in obj) {
			console.log(obj[key]);
		}
	});
});