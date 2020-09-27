import React from "react";
import "./App.css";
import StatelessComponent from "./Components/StatelessComponent";
import StatefullComponent from "./Components/StatefullComponent";

function App() {
  return (
    <div>
      My App
      <hr/>
      <StatelessComponent />
      <hr/>
      <StatefullComponent/>
    </div>
  );
}

export default App;
