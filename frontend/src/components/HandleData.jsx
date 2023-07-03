import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HandleData = () => {
  const [geoJSON, setGeoJSON] = useState(null);

  useEffect(() => {
    const zipCodes = ['29001', '29002', '29003'];

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
  }, []);

  return (
    <div>
      <h2>Zip Code Converter</h2>
      {geoJSON ? (
        <textarea
          rows={10}
          cols={50}
          value={JSON.stringify(geoJSON, null, 2)}
          readOnly
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default HandleData;
