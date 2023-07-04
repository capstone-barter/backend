import React from "react";
import Footer from "../components/Footer";


const GeospatialModel = () => {
  return (
    <>
      <div className="w-full h-full">
        <iframe
          className="h-full w-full aspect-square	"
          src="geospatial-model.html"
          title="Machine Learning Model Notebook"
        ></iframe>
      </div>
      <Footer />
    </>
  );
};

export default GeospatialModel;
