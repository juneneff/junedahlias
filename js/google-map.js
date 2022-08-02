function init() {
		var mapOptions = {
				cnter: new google.maps.LatLng(48.083346, -121.969246),
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				zoom: 13
		};
		var venueMap;													//Map draws a map
		venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function loadScript() {
		var script = document.createElement('script');					//Create <script> element
		script.src = 'http://maps.googleleapis.com/maps/api/js?sensor=false&callback=init';
		document.body.appendChild(script);								//Add element to page
}

window.onload = loadScript;												//Onload call