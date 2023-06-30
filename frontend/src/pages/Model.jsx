import React from "react";
import Footer from "../components/Footer";

const Model = () => {
  return (
    <>
      <h1 className="mb-5 text-6xl font-bold leading-none tracking-normal text-purple-950 md:text-5xl lg:text-6xl dark:text-white text-center pt-5 pr-3 pl-3 ps-px">
        Machine Learning at the hearth of{" "}
        <span className="text-pink-500 dark:text-pink-600">innovation</span> and{" "}
        <span className="text-pink-500 dark:text-pink-600">efficiency</span>{" "}
      </h1>
      <p className="text-lg font-normal text-gray-600 lg:text-xl dark:text-gray-400 text-center pr-3 pl-3">
        The machine learning model developed by the team aims at increasing the
        efficiency of the allocation of solar panels in Spain
      </p>

      <h3 class="text-center pt-5 pb-2 text-3xl font-bold text-purple-950 dark:text-white">
        Technologies used
      </h3>
      <div className="flex pr-4 pl-4">
        <div className="w-1/2 p-4 bg-purple-100 p-5 rounded-lg mt-5 shadow-md text-lg">
          The model has been developed using a pletora of different
          technologies. Given the quantity of data to work with, the team has
          uploaded the data in the{" "}
          <span className="text-pink-500 dark:text-pink-600">
            Microsoft Azure cloud
          </span>{" "}
          , in a{" "}
          <span className="text-pink-500 dark:text-pink-600">Data Lake</span> .
          In order to process it another offering of Azure has been utilized,{" "}
          <span className="text-pink-500 dark:text-pink-600">Databricks</span> .
          The data has later been processed in a Jupyter notebook using
          <span className="text-pink-500 dark:text-pink-600"> PySpark</span> and
          <span className="text-pink-500 dark:text-pink-600"> Pandas</span> .
          The web application has beed developed using{" "}
          <span className="text-pink-500 dark:text-pink-600"> React.Js</span> ,
          <span className="text-pink-500 dark:text-pink-600">
            {" "}
            OpenStreetMap
          </span>{" "}
          , and
          <span className="text-pink-500 dark:text-pink-600">
            {" "}
            Leaflet
          </span>{" "}
        </div>

        <div className=" w-1/2 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-1">
          <a href="https://azure.microsoft.com/en-us/free/cloud-services/search/?ef_id=_k_Cj0KCQjw1_SkBhDwARIsANbGpFsZx_oOV81U9K2ZCJEbThMSLvSsMl7xQxHg_FGqiRieKwYGDwA3JtYaArQeEALw_wcB_k_&OCID=AIDcmmy6frl1tq_SEM__k_Cj0KCQjw1_SkBhDwARIsANbGpFsZx_oOV81U9K2ZCJEbThMSLvSsMl7xQxHg_FGqiRieKwYGDwA3JtYaArQeEALw_wcB_k_&gclid=Cj0KCQjw1_SkBhDwARIsANbGpFsZx_oOV81U9K2ZCJEbThMSLvSsMl7xQxHg_FGqiRieKwYGDwA3JtYaArQeEALw_wcB">
            <img
              className="h-auto max-w-[9rem]"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/1200px-Microsoft_Azure_Logo.svg.png"
              alt="Azure"
            />
          </a>
          <a href="https://azure.microsoft.com/en-us/free/databricks/search/?ef_id=_k_Cj0KCQjw1_SkBhDwARIsANbGpFuhSkYuA6RIACSVqJblhE_vEOIQ7UvClUm-T_8RBZELqpnFdU9GN-oaAofnEALw_wcB_k_&OCID=AIDcmmy6frl1tq_SEM__k_Cj0KCQjw1_SkBhDwARIsANbGpFuhSkYuA6RIACSVqJblhE_vEOIQ7UvClUm-T_8RBZELqpnFdU9GN-oaAofnEALw_wcB_k_&gclid=Cj0KCQjw1_SkBhDwARIsANbGpFuhSkYuA6RIACSVqJblhE_vEOIQ7UvClUm-T_8RBZELqpnFdU9GN-oaAofnEALw_wcB">
            <img
              className="h-auto max-w-[9rem]"
              src="https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png"
              alt="Databricks"
            />
          </a>
          <a href="https://azure.microsoft.com/en-us/solutions/data-lake">
            <img
              className="h-auto max-w-[9rem]"
              src="https://www.voksedigital.com/wp-content/uploads/2020/07/azure_data_lake_orig.png"
              alt="Azure Data Lake"
            />
          </a>
          <a href="https://spark.apache.org/docs/latest/api/python/#:~:text=PySpark%20is%20the%20Python%20API,for%20interactively%20analyzing%20your%20data.">
            <img
              className="h-auto max-w-[7rem]"
              src="https://miro.medium.com/v2/resize:fit:1080/1*x1mLNqdKqTZE-jyRiYL90A.png"
              alt="PySpark"
            />
          </a>
          <a href="https://pandas.pydata.org/">
            <img
              className="h-auto max-w-[9rem]"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/1200px-Pandas_logo.svg.png"
              alt="Pandas"
            />
          </a>
          <a href="https://react.dev/">
            <img
              className="h-auto max-w-[9rem]"
              src="https://quintagroup.com/cms/js/js-image/react.js-logo.png/@@images/a9bf22bd-373a-4fae-a900-c22fd12c87c7.png"
              alt="React"
            />
          </a>
          <a href="https://www.openstreetmap.org/#map=10/41.8133/-4.9644">
            <img
              className="h-auto max-w-[5rem]"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/OpenStreetMap-Logo-2006.svg/2048px-OpenStreetMap-Logo-2006.svg.png"
              alt="OpenStreetMap"
            />
          </a>
          <a href="https://leafletjs.com/">
            <img
              className="h-auto max-w-[9rem]"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Leaflet_logo.svg/1280px-Leaflet_logo.svg.png"
              alt="Leaflet"
            />
          </a>
        </div>
      </div>
      <h3 class="pt-5 text-center pb-2 text-3xl font-bold text-purple-950 dark:text-white">
        Architecture
      </h3>

      <div className="flex flex-row-reverse justify-center items-center">
        <div className="max-w-3xl">
          <img
            className="h-auto max-w-full rounded-lg"
            src="Architecture.jpeg"
            alt="Model Architecture"
          />
        </div>
      </div>

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
      <div className="flex justify-center pt-3">
        <button className=" bg-purple-950 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-full">
          Check out the full Notebook
        </button>
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
