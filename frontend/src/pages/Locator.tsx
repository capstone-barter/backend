import { BlitzPage } from "@blitzjs/next"
import NavBar from "src/core/components/Navbar"
import Map from "../core/components/Map"

const Locator: BlitzPage = () => {
  return (
    <>
      <NavBar />
      <div className="w-full text-md map">
        <Map />
      </div>
    </>
  )
}

export default Locator
