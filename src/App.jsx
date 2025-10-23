import React from "react";
import Nav from "./components/Nav";
import About from "./pages/About";
import HeroBg from "./components/HeroBg";

function App() {
  return (
    <>
      <div>
        <HeroBg />
        <Nav />
        <About />
      </div>
    </>
  );
}

export default App;
