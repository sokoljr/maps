$(function(){
	
	var r = Raphael('map', 1200, 820),
		attributes = {
            fill: '#fff',
            stroke: '#808080',
            'stroke-width': 1,
            'stroke-linejoin': 'round'
        },
		arr = new Array();
	
	for (var country in paths) {
		var obj = r.path(paths[country].path);
		obj.attr(attributes);
		arr[obj.id] = country;
		obj.hover(function(){
			this.animate({
				fill: '#808080'
			}, 300);
		}, function(){
			this.animate({
				fill: attributes.fill
			}, 300);
		})
	}
});

