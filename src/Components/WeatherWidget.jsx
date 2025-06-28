import React from "react";
import "./weatherWidget.css"

function WeatherWidget({weatherData}) {
    return(
        <>
        <div className="Card">
            <div>City name: {weatherData?.name}</div>
            <div>Country: {weatherData?.sys?.country}</div>
            <div className="temp">{weatherData?.main?.temp}°C</div>
            <div>Humidity: {weatherData?.main?.humidity}</div>
            <div>WindSpeed: {weatherData?.wind?.speed}</div>
            <div>Weather: {weatherData?.weather[0]?.description}</div>
        </div>
        </>
    )
    
}

export default WeatherWidget