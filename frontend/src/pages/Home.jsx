import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <NavBar />
      <br />
      <br />
      <br />
      <br />

      <h1 class="mb-5 text-6xl font-bold leading-none tracking-normal text-purple-950 md:text-5xl lg:text-6xl dark:text-white text-center pr-3 pl-3 ps-px">
        Innovating solar panels allocation with{" "}
        <span class="text-pink-500 dark:text-pink-600">machine learning</span>{" "}
      </h1>
      <p class="text-lg font-normal text-gray-600 lg:text-xl dark:text-gray-400 text-center pr-3 pl-3">
        Machine Learning model to optimize the research of optimal solar panels 
        location for Barter
      </p>

      <Footer />
    </>
  );
};

export default Home;
