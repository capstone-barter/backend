import React from "react";
import ProfileCard from "../components/Profilecard";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <h1 class="pt-9 mb-5 text-6xl font-bold leading-none tracking-normal text-purple-950 md:text-5xl lg:text-6xl text-center pr-3 pl-3 ps-px">
        The team worked on the{" "}
        <span class="text-pink-500">frontend </span> and{" "}
        <span class="text-pink-500">
          machine learning model{" "}
        </span>{" "}
        simoultanously
      </h1>
      <p class="pb-5 text-lg font-normal text-gray-600 lg:text-xl text-center pr-3 pl-3">
        Both components have been developed simoultanously to increase the
        workload efficiency
      </p>
      <hr className="w-48 h-1 mx-auto my-4 bg-purple-950 border-0 rounded md:my-10" />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 content-center	">
        <div className="p-4 bg-purple-100 p-5 rounded-lg mt-5 shadow-md text-lg ">
          <h4 class="text-center pt-1 text-2xl font-bold text-pink-500 col">
            Machine Learning Model
          </h4>
          <div className="grid lg:grid-cols-2 gap-1">
            <ProfileCard
              imageURL="https://media.licdn.com/dms/image/C4D03AQEHY6yiknxlXQ/profile-displayphoto-shrink_800_800/0/1584299339620?e=2147483647&v=beta&t=AOLo23N3V4_yypRB0G6jyzpKZyh4_gs6-9YsydE5Bck"
              name="Niccolò Borgato"
              position="DevOps Engineer"
              address="Milan, Italy"
              phone="+39 340995012"
              email="borgato.niccolo@gmail.com"
              githubLink="https://github.com/Niccoborg22"
            ></ProfileCard>
            <ProfileCard
              imageURL="https://media.licdn.com/dms/image/C5603AQFGwOeVoNPvfQ/profile-displayphoto-shrink_800_800/0/1563886588332?e=2147483647&v=beta&t=PPpdDVjDWxjEzqIvonPuBaUp-fIJnhQLUak8GzOLwxw"
              name="Joseph Guss"
              position="DevOps Engineer"
              address="California, USA"
              phone="+34 600074781"
              email="jguss45@gmail.com"
              githubLink="https://github.com/jguss45"
            ></ProfileCard>
            <div class="col-span-2 ">
              <ProfileCard
                imageURL="https://media.licdn.com/dms/image/C4D03AQEHY6yiknxlXQ/profile-displayphoto-shrink_800_800/0/1584299339620?e=2147483647&v=beta&t=AOLo23N3V4_yypRB0G6jyzpKZyh4_gs6-9YsydE5Bck"
                name="Niccolò Borgato"
                position="DevOps Engineer"
                address="Milan, Italy"
                phone="+39 340995012"
                email="borgato.niccolo@gmail.com"
                githubLink="https://github.com/Niccoborg22"
              ></ProfileCard>
            </div>
          </div>
        </div>

        <div className="p-4 bg-pink-100 p-5 rounded-lg mt-5 shadow-md text-lg">
          <h4 class="text-center pt-1 text-2xl font-bold text-purple-950 col">
            Web Application
          </h4>
          <div className="grid lg:grid-cols-2 gap-1">
            <ProfileCard
              imageURL="https://media.licdn.com/dms/image/C4D03AQEHY6yiknxlXQ/profile-displayphoto-shrink_800_800/0/1584299339620?e=2147483647&v=beta&t=AOLo23N3V4_yypRB0G6jyzpKZyh4_gs6-9YsydE5Bck"
              name="Niccolò Borgato"
              position="DevOps Engineer"
              address="Milan, Italy"
              phone="+39 340995012"
              email="borgato.niccolo@gmail.com"
              githubLink="https://github.com/Niccoborg22"
            ></ProfileCard>
            <ProfileCard
              imageURL="https://media.licdn.com/dms/image/C5603AQFGwOeVoNPvfQ/profile-displayphoto-shrink_800_800/0/1563886588332?e=2147483647&v=beta&t=PPpdDVjDWxjEzqIvonPuBaUp-fIJnhQLUak8GzOLwxw"
              name="Joseph Guss"
              position="DevOps Engineer"
              address="California, USA"
              phone="+34 600074781"
              email="jguss45@gmail.com"
              githubLink="https://github.com/jguss45"
            ></ProfileCard>
            <div class="col-span-2 ">
              <ProfileCard
                imageURL="https://media.licdn.com/dms/image/C4D03AQEHY6yiknxlXQ/profile-displayphoto-shrink_800_800/0/1584299339620?e=2147483647&v=beta&t=AOLo23N3V4_yypRB0G6jyzpKZyh4_gs6-9YsydE5Bck"
                name="Niccolò Borgato"
                position="DevOps Engineer"
                address="Milan, Italy"
                phone="+39 340995012"
                email="borgato.niccolo@gmail.com"
                githubLink="https://github.com/Niccoborg22"
              ></ProfileCard>
            </div>
          </div>
        </div>
      </div>
      <br />

      <div className="flex justify-center items-center">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/009/385/064/small/contact-us-buttons-clipart-design-illustration-free-png.png"
          alt="Contact us"
          className="h-16"
        />
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Contact;
