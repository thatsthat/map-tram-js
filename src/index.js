import "leaflet/dist/leaflet.css";
import "./style.css";
import L from "leaflet";
import t2 from "./t2";
import tramData from "./tramData";

import haversine from "haversine-distance";

document.body.innerHTML = `<div id="map"></div>`;

var map = L.map("map").setView([41.3748, 2.1], 14);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
}).addTo(map);

L.geoJSON(t2.track).addTo(map);

// Create marker for tram
var iconSettings = {
  mapIconUrl:
    '<svg height="12" viewBox="0 -120 120 120" width="12" version="1.1" id="svg153" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"> <defs id="defs157" /> <circle style="fill:#018077;fill-opacity:1" id="path3459" cx="60" cy="-60" r="60" /></svg>',
};

var divIcon = L.divIcon({
  className: "leaflet-data-marker",
  html: L.Util.template(iconSettings.mapIconUrl, iconSettings),
});

L.marker([41.39028, 2.13541], { icon: divIcon, id: 0 }).addTo(map);

const coords = t2.track.features[0].geometry.coordinates;

tramData();
