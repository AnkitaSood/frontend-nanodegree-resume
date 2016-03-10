/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<div>%data%</div>';
var HTMLtopContacts = '<ul id="topContacts" class="top-contacts flex-box"></ul>';
var HTMLcontactGeneric = '<li class="flex-item"><span class="gray-text">%contact%</span><span class="dark-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="gray-text">mobile</span><span class="dark-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="gray-text">email</span><span class="dark-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="gray-text">twitter</span><span class="dark-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="gray-text">github</span><span class="dark-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="gray-text">blog</span><span class="dark-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="gray-text">location</span><span class="dark-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<div class="welcome-message">%data%</div><blockquote cite="%cite%">%quote%</blockquote>';

var HTMLskillsStart = '<h3>Skills at a Glance:</h3><ul id="skills"></ul>';
var HTMLskills = '<li><span class = "glyphicon glyphicon-star"></span><span class="dark-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p>%data%</p>';

var HTMLcaseStart = '<div class="crime-entry"></div>';
var HTMLcaseTitle = '<a href="#">%data%</a>';
var HTMLcaseDates = '<div class="date-text">%data%</div>';
var HTMLcaseDescription = '<p>%data%</p>';
var HTMLcaseImage = '<img width="300" height="250" src="%data%">';

var HTMLschoolStart = '<div class="education-entry clearfix"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<a class="online-url" href="#">%data%</a>';


var googleMap = '<div id="map"></div>';

/*
var internationalizeButton = '<button>Internationalize</button>';
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
NOT BEING USED IN THIS PROJECT
$(document).ready(function() {
  $('button').click(function() {
	var iName = inName() || function(){};
	$('#name').html(iName);
  });
});
*/
/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
NOT BEING USED IN THIS PROJECT
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
	{
	  x: x,
	  y: y
	}
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
  logClicks(loc.clientX, loc.clientY);
});

*/

/*
Custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map; // declares a global map variable

/*
initializeMap() is called when page is loaded.
*/
function initializeMap() {

	var locations;

	var mapOptions = {
		disableDefaultUI: true
	};

	/*
	For the map to be displayed, the googleMap var must be
	appended to #mapDiv in resumeBuilder.js.
	*/
	map = new google.maps.Map(document.querySelector('#map'), mapOptions);

	/*
	locationFinder() returns an array of every location string from the mapLocations JSON.
	*/

	function locationFinder() {
		var locations = [];
		$.each(mapLocations, function(loc, desc) {
			locations.push(loc);
		});


		// adds the single location property from bio to the locations array
		/*locations.push(bio.contacts.location);
		 NOT DISPLAYING OTHER LOCATIONS SINCE THEY'RE FICTIONAL
		// iterates through school locations and appends each location to
		// the locations array.
		education.schools.forEach(function(school){
		  locations.push(school.location);
		});

		// iterates through work locations and appends each location to
		// the locations array.
		work.jobs.forEach(function(job){
		  locations.push(job.location);
		});*/

		return locations;
	}

	/*
	createMapMarker(placeData) reads Google Places search results to create map pins.
	placeData is the object returned from search results containing information
	about a single location.
	*/
	function createMapMarker(placeData) {

		// The next lines save location data from the search result object to local variables
		var lat = placeData.geometry.location.lat(); // latitude from the place service
		var lon = placeData.geometry.location.lng(); // longitude from the place service
		var name = placeData.formatted_address; // name of the place from the place service
		var bounds = window.mapBounds; // current boundaries of the map window

		// marker is an object with additional data about the pin for a single location
		var marker = new google.maps.Marker({
			map: map,
			position: placeData.geometry.location,
			title: name,
			icon: 'images/marker.gif',
			animation: google.maps.Animation.DROP,
			html: placeData.name + ': ' + mapLocations[placeData.name]
		});

		// infoWindows are the little helper windows that open when you click
		// or hover over a pin on a map. They usually contain more information
		// about a location.
		infowindow = new google.maps.InfoWindow();

		google.maps.event.addListener(marker, 'click', function() {
			infowindow.setContent(this.html);
			if (infowindow) {
				infowindow.close();
			}
			// open relevant infowindow
			infowindow.open(map, this);
		});
		// this is where the pin actually gets added to the map.
		// bounds.extend() takes in a map location object
		bounds.extend(new google.maps.LatLng(lat, lon));
		// fit the map to the new marker
		map.fitBounds(bounds);
		// center the map
		map.setCenter(bounds.getCenter());
	}
	/*
	callback(results, status) makes sure the search returned results for a location.
	If so, it creates a new map marker for that location.
	*/
	function callback(results, status) {
		if (status == google.maps.places.PlacesServiceStatus.OK) {
			createMapMarker(results[0]);
		}
	}

	/*
	pinPoster(locations) takes in the array of locations created by locationFinder()
	and fires off Google place searches for each location
	*/
	function pinPoster(locations) {

		// creates a Google place search service object. PlacesService does the work of
		// actually searching for location data.
		var service = new google.maps.places.PlacesService(map);

		// Iterates through the array of locations, creates a search object for each location
		locations.forEach(function(place) {
			// the search request object
			var request = {
				query: place
			};

			// Actually searches the Google Maps API for location data and runs the callback
			// function with the search results after each search.
			service.textSearch(request, callback);
		});
	}

	// Sets the boundaries of the map based on pin locations
	window.mapBounds = new google.maps.LatLngBounds();

	// locations is an array of location strings returned from locationFinder()
	locations = locationFinder();

	// pinPoster(locations) creates pins on the map for each location in
	// the locations array
	pinPoster(locations);

}

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
	//Make sure the map bounds get updated on page resize
	map.fitBounds(mapBounds);
});