import React from "react";
import Footer from "../components/Footer";



const Home = () => {
  return (
    <>
      <h1 className="mb-5 text-6xl font-bold leading-none tracking-normal text-purple-950 md:text-5xl lg:text-6xl dark:text-white text-center pr-3 pl-3 ps-px">
        Innovating solar panels allocation with{" "}
        <span className="text-pink-500 dark:text-pink-600">
          machine learning
        </span>{" "}
      </h1>
      <p className="pb-7 text-lg font-normal text-gray-600 lg:text-xl dark:text-gray-400 text-center pr-3 pl-3">
        The team developed a machine learning model using the latest
        technologies available to find the most suitable location to install
        solar panels
      </p>

      <div className="bg-white p-5 rounded-lg mt-5 shadow-md">
        <p className="text-sm font-normal text-black lg:text-base text-center pr-3 pl-3">
          Welcome to Barter At Barter, we're committed to revolutionizing the
          way we use and distribute energy. We facilitate ultra-fast charging
          for electric vehicles using solar energy, democratize solar energy
          without a roof and without investment, and monetize roofs by creating
          solar communities.
        </p>
      </div>

      <div className="bg-white p-5 rounded-lg mt-5 shadow-md">
        <p className="text-sm font-normal text-black lg:text-base text-center pr-3 pl-3">
          Our Project Our main goal is to develop a system for identifying
          optimal locations for new facilities based on electricity consumption
          data linked to cadastral references. We're integrating SIPS (Supply
          Point Information System) data with cadastral data of a geographic
          area and using our existing internal tool to estimate monthly/annual
          electricity consumption data. This will enrich our dataset with
          consumption information, allowing us to make informed decisions on the
          location of future installations.
        </p>
      </div>

      <div className="bg-white p-5 rounded-lg mt-5 shadow-md">
        <p className="text-sm font-normal text-black lg:text-base text-center pr-3 pl-3">
          Join Our Energy Revolution Whether you're a business looking to
          conserve cash and gain new customers, or an individual interested in
          sustainable energy solutions, we invite you to join us. Together, we
          can create a future where energy is more accessible, efficient, and
          environmentally friendly.
        </p>
      </div>

      <div className="relative">
        <img
          className="h-auto max-w-full"
          src="barter_image.jpg"
          alt="image barter"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center pl-6">
          <h1 className="text-5xl text-white font-bold">#InnovatingWithAI</h1>
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
