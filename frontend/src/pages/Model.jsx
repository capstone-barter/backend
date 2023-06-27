import React from 'react'
import Footer from '../components/Footer';



const Model = () => {
  return (
    <>
      <h1 className="mb-5 text-6xl font-bold leading-none tracking-normal text-purple-950 md:text-5xl lg:text-6xl dark:text-white text-center pr-3 pl-3 ps-px">
        The model has been developed using{" "}
        <span className="text-pink-500 dark:text-pink-600">
          machine learning ????
        </span>{" "}
      </h1>
      <p className="text-lg font-normal text-gray-600 lg:text-xl dark:text-gray-400 text-center pr-3 pl-3">
        BLA BLA BLA BLA BLA BLA
      </p>

      <h3 class="text-3xl font-bold text-purple-950 dark:text-white">
        Technologies
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

      <h3 class="text-3xl font-bold text-purple-950 dark:text-white">
        Architecture
      </h3>
      <img src="" alt="" />

      <h3 class="text-3xl font-bold text-purple-950 dark:text-white">
        The Jupyter Notebook
      </h3>
      <iframe src="geospatial-model.html" width="100%" height="800px"></iframe>

      <Footer />
    </>
  );
}

export default Model