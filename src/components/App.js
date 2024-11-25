
import React, { useState, useEffect } from "react";
import WeatherDisplay from "./WeatherDisplay";
import './../styles/App.css';

const App = () => {
  const [weatherState, setWeatherState] = useState(
    {
      temperature: 0,
      conditions: "",
    }
  );

  useEffect(() => {
    setWeatherState({temperature: 25, conditions: "Sunny"});
  }, []);
  
  return (
    <div>
        {/* Do not remove the main div */}
        <WeatherDisplay weatherState={weatherState} />
    </div>
  )
}

export default App
