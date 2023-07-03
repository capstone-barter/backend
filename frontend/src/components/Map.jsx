import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import polyData from '../data/malagaZipPolyBorder.geojson';

// Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1Ijoiamd1c3M0NSIsImEiOiJjbGpnNHAzZDIwNjdnM2Zta3A3NXJ6cmhnIn0.OE5tVwxKyKW8ha24G4YW2g';

const Map = () => {
  //useEffect used so map only rendered once
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-4.4214, 36.7213], // starting position [lng, lat] to center on malaga
      zoom: 12 // starting zoom
    });

    map.on('style.load', () => {
      // Use imported geoJSON data directly
      const data = polyData;

      // Make sure data has loaded correctly
      if (data) {
        // Add polygon geoJSON as data source
        map.addSource('polygon', {
          type: 'geojson',
          data: data
        });

        // Add fill layer for polygon
        map.addLayer({
          id: 'polygon-fill',
          type: 'fill',
          source: 'polygon',
          layout: {},
          paint: {
            'fill-color': '#0080ff',
            'fill-opacity': 0.5
          }
        });

        map.addLayer({
          id: 'polygon-outline',
          type: 'line',
          source: 'polygon',
          layout: {},
          paint: {
            'line-color': '#000',
            'line-width': 2
          }
        });
        
      } else {
        console.error("Issue with loading geoJSON data");
      }
    });

    // Cleanup map instance on component unmount
    return () => map.remove();
  }, []);


  return (
    <div
      id="map"
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        height: "100%",
        border: "2px solid #42006B",
        borderRadius: "8px",
      }}
    />
  );
};

export default Map;
