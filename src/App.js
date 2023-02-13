import React from "react";
import Collection from "./components/Collection";
import Company from "./components/Company";
import Home from "./components/Home";
import Letter from "./components/Letter";
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
      <Company />
      <Letter />
    </div>
  );
}

export default App;
