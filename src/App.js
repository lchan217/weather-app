import React from "react";
import "./App.css";
import WeatherContainer from "../src/components/WeatherContainer";

function App() {
  return (
    <div className='App'>
      <h1>Weather for Munich </h1>
      <WeatherContainer />
    </div>
  );
}

export default App;
