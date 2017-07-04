"use strict";
// (c) Paweł Zmarzły
jQuery('#zabytek-scroll').on('mousewheel', function(event) {
    		event.preventDefault();
    		var direction = (event.deltaY * event.deltaFactor) * -1;
    		var change = jQuery(window).width();
    		if (direction < 0) change = 2 * direction;
    		change = change * 0.75;
    		jQuery('#zabytek-scroll').stop().animate({ scrollTop: '+=' + change }, 200);
    		//console.log(event.deltaY, event.deltaFactor, event.originalEvent.deltaMode, event.originalEvent.wheelDelta);
  		});

function hideDesc() {
	var z = document.getElementById('zabytek');
	z.style.top = '100%';
	z.style.opacity = '0';
}

function showDesc(id, center) {
	hideDesc();
	llist._currentLocation_index = id;
	if (center) m.setView(locationsList[id].latlng, locationsList[id].zoom);
	jQuery('#zabytek-scroll').stop().scrollTop(0);
	setTimeout(function() {
		document.getElementById('zabytek-tytul').innerHTML = locationsList[id].title;
		if (locationsList[id].opis != '') document.getElementById('zabytek-opis').innerHTML = locationsList[id].opis;
		else alert("ERROR: Opis = undefined");
		if (locationsList[id].funk !== undefined) locationsList[id].funk();
		var img = document.getElementById('zabytek-foto');
		img.onload = function() {
			var z = document.getElementById('zabytek');
			z.style.opacity = '1';
			z.style.top = '0%';
			setTimeout(function() {
				jQuery('#zabytek-scroll').animate({ scrollTop: 1000 }, 15000);
			}, 1000);
			this.onload = null;
		};
		img.src = "pliki/zabytki/" + locationsList[id].foto;
	}, 1000);
}
var CARTO_ATTRIB = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | &copy; <a href="http://cartodb.com/attributions">CartoDB</a>';

var m = L.map('map').setView(locationsList[0].latlng, locationsList[0].zoom);

var llist = L.control.locationlist({
	nextTitle: "Dalej",
	prevTitle : "Wstecz",
	locationsList : locationsList,
	showList: false });
m.addControl(llist);

var layer = L.tileLayer(CARTO_URL, {attribution: CARTO_ATTRIB, minZoom: 5, maxZoom: 7}).addTo(m);

for (var i = 1; i < locationsList.length; i++) L.marker(locationsList[i].latlng, {icon: new L.NumberedDivIcon({ number: i }), riseOnHover: true, id: i}).addTo(m).on('click', function(e) { showDesc(e.target.options.id, true); });

llist.on('next', function() { showDesc(llist._currentLocation_index, false); });
llist.on('prev', function() { showDesc(llist._currentLocation_index, false); });

document.getElementById('zabytek-chowaj').onclick = function() { hideDesc(); };
var startLoading = setTimeout(function() { window.location.href = "offline.html"; }, 10000);
window.onload = function() { clearTimeout(startLoading); showDesc(0, true); };