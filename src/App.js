import { useState } from "react";
import Customers from "./components/Customers";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Prodcuts from "./components/Prodcuts";
import Contact from "./components/Contact";


function App() {
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <div>
      <Navbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
      <HeroSection isMenuShown={isMenuShown} />
      <Prodcuts />
      <Customers />
      <Contact />

    </div>
  );
}

export default App;
