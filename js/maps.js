/* Author: LiveWork */


// Load the map scripts
 google.load('maps', '3', {other_params:'sensor=true'});

 // Function to create a map and check for geolocation
 function mapInit() {

 // Set the options to be used when creating the map
 var myOptions = {
 zoom: 0,
 center: new google.maps.LatLng(0, 0),
 mapTypeId: google.maps.MapTypeId.ROADMAP
 };

 // Create the new
 map = new google.maps.Map(document.getElementById("map"), myOptions);

 // Check if the browser supports geolocation
 if(navigator.geolocation) {

 navigator.geolocation.getCurrentPosition(currentPositionCallback);

 } else {

 alert('The browser does not support geolocation');

 }

 }

 function currentPositionCallback(position) {

 // Create a new latlng based on the latitude and longitude from the user's position
 var user_lat_long = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

 // Add a marker using the user_lat_long position
 var marker = new google.maps.Marker({
 position: user_lat_long,
 map: map
 });

 // Set the center of the map to the user's position and zomm into a more detailed level
 map.setCenter(user_lat_long);
 map.setZoom(15);

 }

 google.setOnLoadCallback(mapInit);

