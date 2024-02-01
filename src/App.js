import { useState } from "react";
import Team from "./components/Team";
import Home  from "./components/Home";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Contact from "./components/Contact";


function App() {
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <div>
      <Navbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
      <Home isMenuShown={isMenuShown} />
      <Features />
      <Team />
      <Contact />

    </div>
  );
}

export default App;
