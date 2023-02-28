import Navbar from "./components/Navbar";
import React from "react";
import Hero from "./components/Hero";
import Sessiond from "./components/Sessiond";
import NewsLetter from "./components/NewsLetter";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Sessiond/>
      <NewsLetter/>
      <Cards/>
    </>
  );
}

export default App;
