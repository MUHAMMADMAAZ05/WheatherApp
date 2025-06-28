import React, { useRef, useState } from "react";
import axios from "axios"
import WeatherWidget from "./weatherWidget";
import "./weatherWidget.css";

 function Home () {
    const [weatherData, setWeatherData] = useState([]);
    const cityNameRef=useRef(null)
    const submitHandler = async(e) => {
        e.preventDefault();
        console.log("Form submitted");
        console.log("input",cityNameRef.current.value)
        let Api_key="e0f99c494c2ce394a18cc2fd3f100543"
        try {
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityNameRef.current.value}&appid=${Api_key}&units=%22metric%22`)
            console.log(response.data)
            setWeatherData([response.data,...weatherData])
        } catch (error) {
            console.log(error.data)
        }
    };
    
    

    return (
        <>
           <h1 style={{ marginBottom: "20px", textAlign: "center", color: "#4f46e5" }}>🌤️ Weather App</h1>
           <form onSubmit={submitHandler}>
            <label htmlFor="CityNameInput">City Name:</label>
            <input
            id="CityNameInput"
            type="text" required minLength={2} maxLength={20} ref={cityNameRef} placeholder="e.g. Karachi, London" />
            <button type="submit">Get Weather</button>
            </form>
            <hr style={{ margin: "30px 0" }} />
            {weatherData.length ? (
                weatherData.map((eachWeatherData, i) => (
                <WeatherWidget key={i} weatherData={eachWeatherData} />
            ))
        ) : (
    <div style={{ textAlign: "center", color: "#555" }}>No Data</div>
  )}
</>

        
    )
}

export default Home;
