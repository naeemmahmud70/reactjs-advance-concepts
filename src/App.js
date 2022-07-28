import React from "react";
import "./App.css";
import Refs from "./ForwardRef/Refs";
import HOC from "./HOC/index";

function App() {
  return (
    <div className="App">
      <HOC></HOC>
      <Refs></Refs>
    </div>
  );
}

export default App;
