import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Map from "../components/Map";

const Home = () => {
  return (
    <>
      <h1 className="ml-7 mr-7 pt-9 mb-5 text-6xl font-bold leading-none tracking-normal text-purple-950 md:text-5xl lg:text-6xl text-center pr-3 pl-3 ps-px">
        Innovating Solar Panels Allocation with{" "}
        <span className="text-pink-500">Machine Learning</span>{" "}
      </h1>
      <p className="pb-7 text-lg font-normal text-gray-600 lg:text-xl text-center pr-3 pl-3">
        The team developed a machine learning model using the latest
        technologies available to find the most suitable location to install
        solar panels
      </p>
      <hr className="w-48 h-1 mx-auto my-4 bg-purple-950 border-0 rounded md:my-10" />

      <div className="flex pr-4 pl-4">
        <div className="w-3/4 p-4  p-5 rounded-md mt-5 text-md">
          Our Project Our main goal is to develop a system for identifying
          optimal locations for new facilities based on electricity consumption
          data linked to cadastral references. We're integrating SIPS (Supply
          Point Information System) data with cadastral data of a geographic
          area and using our existing internal tool to estimate monthly/annual
          electricity consumption data. This will enrich our dataset with
          consumption information, allowing us to make informed decisions on the
          location of future installations.
        </div>
        <div className="pl-9 w-1/4 flex items-center">
          <img
            className="h-32"
            src="https://cdn-icons-png.flaticon.com/512/8637/8637099.png"
            alt="Model image"
          />
          <div className="pl-5"></div>
          <Link to="/Model">
            <button className="pl-4 bg-purple-950 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded">
              Learn More about the Model
            </button>
          </Link>
        </div>
      </div>

      <div className="flex pr-4 pl-4">
        <div className="pl-9 w-1/4 flex items-center">
          <img
            className="h-32"
            src="https://cdn-icons-png.flaticon.com/512/854/854878.png"
            alt="Model image"
          />
          <div className="pl-5"></div>
          <Link to="/Model">
            <button className="pl-4 bg-purple-950 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded">
              Check Out the Results
            </button>
          </Link>
        </div>
        <div className="w-3/4 p-4  p-5 rounded-lg mt-5 text-md h-96">
          <img
            src="map_image.jpeg"
            alt="Image Map Results"
            className="border-2 border-purple-950"
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />

      <div className="relative">
        <img
          className="h-auto max-w-full"
          src="barter_image.jpg"
          alt="image barter"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center pl-6">
          <h1 className="sm:text-2xl md:text-3xl lg:text-5xl text-white font-bold">
            #InnovatingWithAI
          </h1>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Home;
