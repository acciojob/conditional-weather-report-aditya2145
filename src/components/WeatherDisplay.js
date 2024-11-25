import React from 'react'

const WeatherDisplay = ({ weatherState }) => {
  return (
    <div>
        <p>Temperature : <span style={{color: weatherState.temperature > 20 ? "red" : "blue"}} >{weatherState.temperature}</span></p>
        <p>Conditions : {weatherState.conditions}</p>
    </div>
  )
}

export default WeatherDisplay
