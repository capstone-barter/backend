import React from "react";
import Footer from "../components/Footer";

const Model = () => {
  return (
    <>
      <h1 className="mb-5 text-6xl font-bold leading-none tracking-normal text-purple-950 md:text-5xl lg:text-6xl dark:text-white text-center pr-3 pl-3 ps-px">
        Machine Learning at the hearth of{" "}
        <span className="text-pink-500 dark:text-pink-600">innovation</span> and{" "}
        <span className="text-pink-500 dark:text-pink-600">efficiency</span>{" "}
      </h1>
      <p className="text-lg font-normal text-gray-600 lg:text-xl dark:text-gray-400 text-center pr-3 pl-3">
        This machine learning model developed by the team aims at increasing the efficiency of the allocation of solar panels in Spain
      </p>

      <h3 class="text-center pt-5 pb-2 text-3xl font-bold text-purple-950 dark:text-white">
        Technologies used
      </h3>
      <span class="inline-grid grid-cols-3 gap-4">
        <span>TECH 1</span>
        <span>TECH 2</span>
        <span>TECH 3 </span>
        <span>IMAGE 1</span>
        <span>IMAGE 2</span>
        <span>IMAGE 3</span>
      </span>
      <span class="inline-grid grid-cols-3 gap-4">
        <span>TECH 4</span>
        <span>TECH 5</span>
        <span>TECH 6 </span>
        <span>IMAGE 4</span>
        <span>IMAGE 5</span>
        <span>IMAGE 6</span>
      </span>

      <h3 class="text-center pb-2 text-3xl font-bold text-purple-950 dark:text-white">
        Architecture
      </h3>

      <figure class="mx-auto max-w-3xl">
        <img
          className="h-auto max-w-full rounded-lg"
          src="Architecture.jpeg"
          alt="Model Architecture"
        />
        <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
          Architecture of the Project
        </figcaption>
      </figure>

      <h3 class="pt-5 text-center pb-2 text-3xl font-bold text-purple-950 dark:text-white">
        The Jupyter Notebook
      </h3>
      <div className="w-4/5 mx-auto h-96">
        <div className="border border-purple-950 rounded p-6 h-full">
          <iframe
            className="w-full h-full"
            src="geospatial-model.html"
            title="Machine Learning Model Notebook"
          ></iframe>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Model;
