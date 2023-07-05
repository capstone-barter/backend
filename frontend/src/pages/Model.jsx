import React from "react";
import Footer from "../components/Footer";

const Model = () => {
  return (
    <>
      <h1 className="ml-7 mr-7 pt-9 mb-5 text-6xl font-bold leading-none tracking-normal text-purple-950 md:text-5xl lg:text-6xl text-center pt-5 pr-3 pl-3 ps-px">
        Machine Learning at the Heart of{" "}
        <span className="text-pink-500">Innovation</span> and{" "}
        <span className="text-pink-500">Efficiency</span>{" "}
      </h1>
      <p className="text-lg font-normal text-gray-600 lg:text-xl text-center pr-3 pl-3">
        The machine learning model developed by the team aims at increasing the
        efficiency of the allocation of solar panels in Spain
      </p>

      <hr className="w-48 h-1 mx-auto my-4 bg-purple-950 border-0 rounded md:my-10" />

      <h3 class="text-center pt-5 pb-2 text-3xl font-bold text-purple-950">
        Technologies used
      </h3>
      <div className="flex pr-4 pl-4">
        <div className="w-1/2 p-4 bg-purple-100 p-5 rounded-lg mt-5 shadow-md text-lg">
          The model has been developed using a plethora of different
          technologies. Given the quantity of data to work with, the team has
          uploaded the data in the{" "}
          <span className="text-pink-500 dark:text-pink-600">
            Microsoft Azure cloud
          </span>{" "}
          , in a{" "}
          <span className="text-pink-500 dark:text-pink-600">Data Lake</span>.
          In order to process the data, another offering of Azure has been utilized,{" "}
          <span className="text-pink-500 dark:text-pink-600">Databricks</span>.
          The data has later been processed in a Jupyter notebook using
          <span className="text-pink-500 dark:text-pink-600"> PySpark</span> and
          <span className="text-pink-500 dark:text-pink-600"> Pandas</span>.
          The web application has been developed using{" "}
          <span className="text-pink-500 dark:text-pink-600"> React.js</span>,
          <span className="text-pink-500 dark:text-pink-600">
            {" "}
            Tailwind CSS
          </span>{" "}
          , and
          <span className="text-pink-500 dark:text-pink-600">
            {" "}
            Mapbox GL
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
          <a href="https://tailwindcss.com/">
            <img
              className="h-auto max-w-[5rem]"
              src="data:image/png;base64,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"
              alt="Tailwind CSS"
            />
          </a>
          <a href="https://docs.mapbox.com/mapbox-gl-js/guides/">
            <img
              className="h-auto max-w-[9rem]"
              src="https://mma.prnewswire.com/media/570399/mapbox_logo_color.jpg?p=facebook"
              alt="Mapbox GL"
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
            src="Architecture.jpg"
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
        <a href="/Notebook">
          <button className=" bg-purple-950 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-full">
            Check out the full Notebook
          </button>
        </a>
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
