import React from "react";
import ProfileCard from "../components/Profilecard";


const Contact = () => {
  return (
    <>
      <h1 class="mb-5 text-6xl font-bold leading-none tracking-normal text-purple-950 md:text-5xl lg:text-6xl dark:text-white text-center pr-3 pl-3 ps-px">
        Innovating solar panels allocation with{" "}
        <span class="text-pink-500 dark:text-pink-600">machine learning</span>{" "}
      </h1>
      <p class="text-lg font-normal text-gray-600 lg:text-xl dark:text-gray-400 text-center pr-3 pl-3">
        Machine Learning model to optimize the research of optimal solar panels
        location for Barter
      </p>
      <div className="mt-20 grid grid-cols-3 gap-4">
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
          imageURL="https://media.licdn.com/dms/image/C4D03AQEHY6yiknxlXQ/profile-displayphoto-shrink_800_800/0/1584299339620?e=2147483647&v=beta&t=AOLo23N3V4_yypRB0G6jyzpKZyh4_gs6-9YsydE5Bck"
          name="Niccolò Borgato"
          position="DevOps Engineer"
          address="Milan, Italy"
          phone="+39 340995012"
          email="borgato.niccolo@gmail.com"
          githubLink="https://github.com/Niccoborg22"
        ></ProfileCard>
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
          imageURL="https://media.licdn.com/dms/image/C4D03AQEHY6yiknxlXQ/profile-displayphoto-shrink_800_800/0/1584299339620?e=2147483647&v=beta&t=AOLo23N3V4_yypRB0G6jyzpKZyh4_gs6-9YsydE5Bck"
          name="Niccolò Borgato"
          position="DevOps Engineer"
          address="Milan, Italy"
          phone="+39 340995012"
          email="borgato.niccolo@gmail.com"
          githubLink="https://github.com/Niccoborg22"
        ></ProfileCard>
      </div>
    </>
  );
};

export default Contact;
