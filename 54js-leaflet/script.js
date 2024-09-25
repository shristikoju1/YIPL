 // Initialize the map and set the view to a default location (London) with a zoom level of 13
 var map = L.map('map').setView([51.505, -0.09], 13);

 // Add a tile layer from OpenStreetMap, which defines the base map tiles
 L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
     maxZoom: 19, // Maximum zoom level
     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' // Attribution for OpenStreetMap
 }).addTo(map);

 // Use the Geolocation API to track the user's location in real-time
 navigator.geolocation.watchPosition(success, error);

 // Variables to store the user's marker, accuracy circle, and whether the map has been zoomed to their location
 let marker, circle, zoomed;

 // Function that runs when the geolocation is successful
 function success(pos) {
     // Extract the latitude, longitude, and accuracy from the geolocation position
     const lat = pos.coords.latitude;
     const lng = pos.coords.longitude;
     const accuracy = pos.coords.accuracy;
     console.log('accuracy:',accuracy);

     // If a marker and circle already exist on the map, remove them before adding new ones
     if (marker) {
         map.removeLayer(marker); // Remove the old marker
         map.removeLayer(circle); // Remove the old circle
     }

     // Add a marker at the user's current position
     marker = L.marker([lat, lng]).addTo(map);

     // Add a circle around the user's current position to represent the accuracy radius
     circle = L.circle([lat, lng], {
         color: 'red',        // Outline color
         fillColor: '#f03',   // Fill color
         fillOpacity: 0.5,    // Opacity of the circle fill
         radius: accuracy     // The radius of the circle represents the accuracy of the position in meters
     }).addTo(map);

     // If the map hasn't zoomed to the user's location yet, do so
     if (!zoomed) {
         zoomed = map.fitBounds(circle.getBounds()); // Fit the map's bounds to the circle's bounds
     }

     // Update the map's center to the user's current location
     map.setView([lat, lng]);
 }

 // Function that runs when there is an error with geolocation
 function error(err) {
     // Check if the error is due to the user denying location access
     if (err.code === 2) {
         alert("Please allow geolocation access"); // Ask the user to allow location access
     } else {
         alert("Cannot get current location"); // Show a generic error if the location can't be accessed
         console.log("error", err); // Log the error for debugging purposes
     }
 }

 // Example commented-out code for adding marker, circle, and polygon (not used in this geolocation example)
 // var marker = L.marker([51.5, -0.09]).addTo(map);

 // var circle = L.circle([51.508, -0.11], {
 //     color: 'red',
 //     fillColor: '#f03',
 //     fillOpacity: 0.5,
 //     radius: 500
 // }).addTo(map);

 // var polygon = L.polygon([
 //     [51.509, -0.08],
 //     [51.503, -0.06],
 //     [51.51, -0.047]
 // ]).addTo(map);

 // marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
 // circle.bindPopup("I am a circle.");
 // polygon.bindPopup("I am a polygon.");

 // var popup = L.popup()
 //     .setLatLng([51.513, -0.09])
 //     .setContent("I am a standalone popup.")
 //     .openOn(map);

 // Function to show an alert when the map is clicked (example of a map click event handler)
 // function onMapClick(e) {
 //     alert("You clicked the map at " + e.latlng);
 // }

 // Attach the click event listener to the map (currently commented out)
 // map.on('click', onMapClick);