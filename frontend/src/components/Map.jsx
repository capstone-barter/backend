import React, { useEffect } from "react";
import L from "leaflet"; // Import Leaflet library

function Map() {
  useEffect(() => {
    var map = L.map("map").setView([51.505, -0.09], 13);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
  }, []); // Empty dependency array to run the effect only once

  return <div style={{ height: "180px" }} id="map"></div>;
}

export default Map;
