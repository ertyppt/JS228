'use strict';

let map;
let centerMarker = L.marker([51.505, -0.09]);

function main() {
  document.addEventListener('DOMContentLoaded', () => {
    map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    centerMarker.addTo(map);

    navigator.geolocation.watchPosition(showPositionOnMap, noGeo);

  });
}

function showPositionOnMap(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  map.panTo([lat, lon]);
  centerMarker.setLatLng([lat, lon]);
}

function noGeo(e) {
  console.log(e);
}

main();