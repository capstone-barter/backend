import NavBar from "./components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Locator from "./pages/Locator";
import Model from "./pages/Model";



function App() {
  let component;

  switch(window.location.pathname) {
    case "/":
      component = <Home />
      break;
    case "/Contact":
      component = <Contact />
      break;
    case "/Locator":
      component = <Locator />
      break;
    case "/Model":
      component = <Model />
      break;
  }
  
  return (
    <div className="App">
      <>
        <NavBar />
        {component}
      </>
    </div>
  );
}

export default App;
