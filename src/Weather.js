import React, {useState} from "react"; 
import "./Weather.css";
import axios from "axios";


function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready:false});
    function handleResponse(response) {

        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            date: "Wednesday, 07:00",
            wind: response.data.wind.speed,
            city: response.data.name,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",

        })
        
        }

if (weatherData.ready) {
  return (
    <div className="Weather"> 
    <form>
        <div className="row">
            <div className="col-9">
                <input type="search" 
                placeholder="enter a city" className="form-control"/>
            </div>
            <div className="col-3">
                <input 
                type="submit"
                 value="Search" 
                 className="btn btn-warning w-100"
                autoFocus="on"/>
                {/* w-100 makes the btn full width */}
            </div>
        </div>
    </form>
    <h1>{weatherData.city}</h1>
    <ul>
        <li>{weatherData.date}</li>
        <li className="text-capitalize">{weatherData.description}</li>
    </ul>
    <div className="row mt-3">
        <div className="col-3">
            <img src={weatherData.iconUrl} 
            alt={weatherData.description}
            className="float-left" />
            <span className="temperature">{Math.round(weatherData.temperature)} </span>
            <span className="unit">°F</span>
        </div>
        <div className="row">
        <div className="col-6">
            <ul className="weather-extras">
                <li>percipitation</li>
                <li>Humidity: {weatherData.humidity}</li>
                 <li>wind: {weatherData.wind}</li>
            </ul>
        </div>
        </div>
    </div>
</div>
 );

} else {
    const apiKey = "11e35b685db379570807b7fb5ef18ce6";
    let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
}
}
export default Weather;