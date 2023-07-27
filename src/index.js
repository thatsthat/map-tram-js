import "leaflet/dist/leaflet.css";
import "./style.css";
import L from "leaflet";

document.body.innerHTML = `<div id="map"></div>`;

var map = L.map("map").setView([41.3778, 2.0977], 14);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
}).addTo(map);
