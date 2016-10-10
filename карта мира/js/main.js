$(document).ready(function() {

	AmCharts.theme = AmCharts.themes.chalk;
	AmCharts.ready(function() {
		var map = AmCharts.makeChart("chartdiv", {
			"type": "map",
			"theme": "chalk",
			"language": "ru",
			"zoomControl": true,
			"zoomOnDoubleClick": false, 
			"dataProvider": {
				"map": "worldLow",
				"getAreasFromMap": true,
				"areas": [
					{
						"id":"AT",
						"url": "http://www.5-zvezd.com/category/austria/",
						"urlTarget": "_blank"
					},
					{
						"id":"AZ",
						"url": "http://www.5-zvezd.com/category/azerbaijan/",
						"urlTarget": "_blank"
					},
					{
						"id":"GB",
						"url": "http://www.5-zvezd.com/category/unitedkingdom/",
						"urlTarget": "_blank"
					},
					{
						"id":"HU",
						"url": "http://www.5-zvezd.com/category/hungary/",
						"urlTarget": "_blank"
					},
					{
						"id":"VN",
						"url": "http://www.5-zvezd.com/category/vietnam/",
						"urlTarget": "_blank"
					},
					{
						"id":"DE",
						"url": "http://www.5-zvezd.com/category/germany/",
						"urlTarget": "_blank"
					},
					{
						"id":"IT",
						"url": "http://www.5-zvezd.com/category/italy/",
						"urlTarget": "_blank"
					},
					{
						"id":"CN",
						"url": "http://www.5-zvezd.com/category/china/",
						"urlTarget": "_blank"
					},
					{
						"id":"LV",
						"url": "http://www.5-zvezd.com/category/latvia/",
						"urlTarget": "_blank"
					},
					{
						"id":"LT",
						"url": "http://www.5-zvezd.com/category/lithuania/",
						"urlTarget": "_blank"
					},
					{
						"id":"NL",
						"url": "http://www.5-zvezd.com/category/netherlands/",
						"urlTarget": "_blank"
					},
					{
						"id": "RU",
						"url": "http://www.5-zvezd.com/category/russia/",
						"urlTarget": "_blank"
					},
					{
						"id":"SK",
						"url": "http://www.5-zvezd.com/category/slovakia/",
						"urlTarget": "_blank"
					},
					{
						"id":"US",
						"url": "http://www.5-zvezd.com/category/usa/",
						"urlTarget": "_blank"
					},
					{
						"id":"TH",
						"url": "http://www.5-zvezd.com/category/thailand/",
						"urlTarget": "_blank"
					},
					{
						"id":"TR",
						"url": "http://www.5-zvezd.com/category/turkey/",
						"urlTarget": "_blank"
					},
					{
						"id":"FI",
						"url": "http://www.5-zvezd.com/category/finland/",
						"urlTarget": "_blank"
					},
					{
						"id":"AE",
						"url": "http://www.5-zvezd.com/category/emirates/",
						"urlTarget": "_blank"
					}
				]
			},
			"zoomControl": {
				"zoomControlEnabled": true,
				"homeButtonEnabled" : true
			}
		});
		map.write("mapdiv");
		/*var path = AmCharts.maps.worldLow;
		var obj = path.svg.g.path;
		for (var key in obj) {
			console.log(obj[key].title);
		}*/
	});
});