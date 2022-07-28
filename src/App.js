import React from "react";
import "./App.css";
import Refs from "./ForwardRef/Refs";
import HOC from "./HOC/index";

function App() {
  return (
    <div className="App">
      <HOC></HOC>
      <Refs></Refs>
      <h2>Local branch is created</h2>
      <h3>Development branch is created </h3>
      <h3>Push from another local repo into development branch</h3>
    </div>
  );
}

export default App;
