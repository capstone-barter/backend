import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Login from "./components/Login";
import NavBar from "./components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Locator from "./pages/Locator";
import Model from "./pages/Model";

import GeospatialModel from "./pages/Notebook";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    //check if user is already logged in
    const userLoggedIn = localStorage.getItem("isLoggedIn");
    if (userLoggedIn === "true") {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    setLoggedIn(true);
    navigate("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setLoggedIn(false);
    navigate("/login");
  }

  if (!isLoggedIn) {
    return <Login handleLogin={handleLogin} />;
  }

  return (
    <div className="App">
      <NavBar handleLogout={handleLogout} />
      <div className="mt-20 ml-20 mr-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Locator" element={<Locator />} />
          <Route path="/Model" element={<Model />} />
          <Route path="/Notebook" element={<GeospatialModel />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
