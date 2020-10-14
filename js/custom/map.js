//const srl = 'http://localhost:5000/api/v1.0/'

//const srl = 'http://104.248.155.81:5000/api/v1.0/'

function initMap() {

	var currlat, currlng;

	$(document).on('change', '#locality', function (e) {
		var locid = $('#locality').val();
		$('#locid').val(locid);
		$.ajax({
			url: srl+"locs",
			type: 'get',
			data: { 'locid': locid },
			success: function (result) {
				//console.log(result[0].lat);
				currlat = result[0].lat;
				currlng = result[0].lng;

				$('#currlat').val(currlat);
				$('#currlng').val(currlng);

				map = new google.maps.Map(document.getElementById('map'), {
					//center: { lat: 17.4500663, lng: 78.37374129999999 },
					center: { lat: parseFloat(currlat), lng: parseFloat(currlng) },
					zoom: 20,
					mapTypeControl: false
				});

				// Initialize the Marker
				var marker = new google.maps.Marker({
					//position: { lat: 17.4500663, lng: 78.37374129999999 },
					position: { lat: parseFloat(currlat), lng: parseFloat(currlng) },
					map: map,
					draggable: true
				});

				$('#map-wrpr').show();
				//Get new lat/long on marker move
				google.maps.event.addListener(marker, 'dragend', function (evt) {
					myLatLng = {
						lat: evt.latLng.lat(),
						lng: evt.latLng.lng()
					};
					//console.log(myLatLng);
					getReverseGeocodingData(myLatLng.lat, myLatLng.lng)
					$('#currlat').val(myLatLng.lat);
					$('#currlng').val(myLatLng.lng);
					//_getAddress(currlat,currlng);
				});

			},
			error: function (xhr, ajaxOptions, thrownError) {
				console.log(xhr.status);
				//alert(thrownError);
			}
		});
	});

	console.log(currlat);





	// Try HTML5 geolocation. Get current location
/*	navigator.geolocation.getCurrentPosition(function (position) {
		myLatLng = {
			lat: position.coords.latitude,
			lng: position.coords.longitude
		};
		//console.log(myLatLng);
		getReverseGeocodingData(myLatLng.lat, myLatLng.lng)
	});

*/

}

function getReverseGeocodingData(lat, lng) {
	var latlng = new google.maps.LatLng(lat, lng);
	//console.log(lat, lng);
	// This is making the Geocode request
	var geocoder = new google.maps.Geocoder();
	geocoder.geocode({ 'latLng': latlng }, function (results, status) {
		if (status !== google.maps.GeocoderStatus.OK) {
			alert(status);
		}
		// This is checking to see if the Geoeode Status is OK before proceeding
		if (status == google.maps.GeocoderStatus.OK) {
			//console.log(results);
			var address = (results[0].formatted_address);
			var addrarray = address.split(',')
			var addr_line_1 = addrarray[0];
			var addr_line_2 = addrarray[1];
			var locality = addrarray[3];
			var city = addrarray[4];

			$('#currlocation').val(addr_line_1.concat(addr_line_2));
			//$('#locality').val(locality);
		}
	});
}
