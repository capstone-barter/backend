import { BlitzPage } from "@blitzjs/next"
import NavBar from "src/core/components/Navbar"
import Footer from "../core/components/Footer"

const GeospatialModel: BlitzPage = () => {
  return (
    <>
      <NavBar />
      <div className="w-full h-full">
        <iframe
          className="h-full w-full aspect-square	"
          src="geospatial-model_v1.html"
          title="Machine Learning Model Notebook"
        ></iframe>
      </div>
      <Footer />
    </>
  )
}

export default GeospatialModel
