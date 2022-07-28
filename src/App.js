import React from "react";
import "./App.css";
import Refs from "./ForwardRef/Refs";
import HOC from "./HOC/index";

function App() {
  return (
    <div className="App">
      <HOC></HOC>
      <Refs></Refs>
      <h2>Pushing after cloning</h2>
    </div>
  );
}

export default App;
