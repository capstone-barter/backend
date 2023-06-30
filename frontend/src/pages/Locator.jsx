import React from "react";
import Map from "../components/Map";
import ZipCodeConverter from "../components/ZipToJson";


const Locator = () => {
  return (
    <>
      <h1>Text Placeholder</h1>
      <div className="w-3/4 p-4  p-5 rounded-lg mt-5 text-md h-96">
        <Map />
      </div>
      
      <ZipCodeConverter />
    </>
  );
};

export default Locator;
