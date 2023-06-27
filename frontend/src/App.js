import NavBar from "./components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Locator from "./pages/Locator";
import Model from "./pages/Model";

import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">
        <NavBar />
        <div className="mt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Locator" element={<Locator />} />
            <Route path="/Model" element={<Model />} />
          </Routes>
        </div>
        
    </div>
  );
}

export default App;
