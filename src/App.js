import React from "react";
import Collection from "./components/Collection";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Studio from "./components/Studio";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Studio />
      <Collection />
    </div>
  );
}

export default App;
