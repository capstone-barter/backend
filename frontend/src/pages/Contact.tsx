import { BlitzPage } from "@blitzjs/next"
import NavBar from "src/core/components/Navbar"
import Footer from "../core/components/Footer"
import ProfileCard from "../core/components/Profilecard"

const Contact: BlitzPage = () => {
  return (
    <>
      <NavBar />
      <div className="mr-20 ml-20">
        <h1 className="ml-7 mr-7 pt-9 mb-5 text-6xl font-bold leading-none tracking-normal text-purple-950 md:text-5xl lg:text-6xl text-center pr-3 pl-3 ps-px">
          The Team Worked on the <span className="text-pink-500">Frontend </span> and{" "}
          <span className="text-pink-500">Optimisation Model </span> simultaneously
        </h1>
        <p className="pb-5 text-lg font-normal text-gray-600 lg:text-xl text-center pr-3 pl-3">
          Both components have been developed simultaneously to increase the workload efficiency
        </p>
        <hr className="w-48 h-1 mx-auto my-4 bg-purple-950 border-0 rounded md:my-10" />
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 content-center	">
          <div className="p-4 bg-purple-100 p-5 rounded-lg mt-5 shadow-md text-lg ">
            <h4 className="text-center pt-1 text-2xl font-bold text-pink-500 col">
              Optimisation Model
            </h4>
            <div className="grid lg:grid-cols-2 gap-1">
              <ProfileCard
                imageURL="https://avatars.githubusercontent.com/u/73837611?v=4"
                name="Nicholas Dieke"
                position="Full-Stack Developer"
                address="London, England"
                phone="+44 7585893530"
                email="nicholasdieke@student.ie.edu"
                githubLink="https://github.com/nicholasdieke"
              ></ProfileCard>
              <ProfileCard
                imageURL="https://avatars.githubusercontent.com/u/114749546?v=4"
                name="Jean Jacob Klat"
                position="Backend Engineer"
                address="Belgium, Europe"
                phone="+32 470651050"
                email="jean-jacob.klat@student.ie.edu"
                githubLink="https://github.com/JJclover"
              ></ProfileCard>
              <div className="col-span-2 ">
                <ProfileCard
                  imageURL="https://avatars.githubusercontent.com/u/60471340?v=4"
                  name="Max Heilingbrunner"
                  position="Data Scientist"
                  address="Munich, Germany"
                  phone="+49 1785444411"
                  email="max.heilingbrunner@student.ie.edu"
                  githubLink="https://github.com/mistermakc"
                ></ProfileCard>
              </div>
            </div>
          </div>

          <div className="p-4 bg-pink-100 p-5 rounded-lg mt-5 shadow-md text-lg">
            <h4 className="text-center pt-1 text-2xl font-bold text-purple-950 col">
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
              <div className="col-span-2 ">
                <ProfileCard
                  imageURL="https://media.licdn.com/dms/image/D4D03AQGx_Siow08wjw/profile-displayphoto-shrink_800_800/0/1688480907901?e=1694044800&v=beta&t=wB_RZ6vSxpDVStsD23sTeKCAKo-No7iCGcV89g6iroQ"
                  name="Lorenzo Stuani"
                  position="Frontend Expert"
                  address="Italy, Europe"
                  phone="+39 3355206062"
                  email="lorenzo.stuani@icloud.com"
                  githubLink="https://github.com/lorenzostuani"
                ></ProfileCard>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default Contact
