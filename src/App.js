import React from "react";
import Collection from "./components/Collection";
import Home from "./components/Home";
import Nature from "./components/Nature";
import Navbar from "./components/Navbar";
import Places from "./components/Places";
import Studio from "./components/Studio";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Studio />
      <Collection />
      <Nature />
      <Places />
    </div>
  );
}

export default App;
