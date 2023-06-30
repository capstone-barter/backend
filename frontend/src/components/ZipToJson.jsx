import React, { useState } from 'react';
import axios from 'axios';

const ZipCodeConverter = () => {
  const zipCodes = ['29001', '29002', '29003'];
  const [geoJSON, setGeoJSON] = useState(null);

  //api call to openstreet to convert zipcodes to geoJSON
  const convertToGeoJSON = async () => {
    const features = [];

    for (const zipcode of zipCodes) {
      try {
        const response = await axios.get(`https://nominatim.openstreetmap.org/search?q=${zipcode}&format=json&addressdetails=1&limit=1`);
        const [result] = response.data;

        if (result) {
          const { lat, lon } = result;
          const feature = {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [parseFloat(lon), parseFloat(lat)],
            },
            properties: {
              zipcode: zipcode,
            },
          };
          features.push(feature);
        }
      } catch (error) {
        console.error(`Error geocoding ${zipcode}:`, error);
      }
    }

    setGeoJSON({
      type: 'FeatureCollection',
      features: features,
    });
  };

  convertToGeoJSON();

  console.log(geoJSON);

  return geoJSON;
};

export default ZipCodeConverter;
