import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import ZipCodeConverter from './ZipToJson';

// Replace 'YOUR_MAPBOX_ACCESS_TOKEN' with your actual Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1Ijoiamd1c3M0NSIsImEiOiJjbGpnNHAzZDIwNjdnM2Zta3A3NXJ6cmhnIn0.OE5tVwxKyKW8ha24G4YW2g';

// Get geoJSON data from ZipToJson component
const geoJSON = ZipCodeConverter();


const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-4.4214, 36.7213], // starting position [lng, lat]
      zoom: 12 // starting zoom
    });

    // Cleanup map instance on component unmount
    return () => map.remove();
  }, []);

  return (
    <div 
      id="map" 
      style={{ 
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60%',
        height: '60%',
        border: '2px solid #ccc',
        borderRadius: '8px', 
      }} 
    />
  
  );
};

export default Map;
