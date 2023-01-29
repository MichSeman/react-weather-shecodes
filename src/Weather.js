import React from "react"; 
import "./Weather.css";

function Weather() {
    return <div className="Weather"> 
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
    <h1>Athens</h1>
    <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly Cloudy</li>
    </ul>
    <div className="row mt-3">
        <div className="col-6">
            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" 
            alt="mostly cloudy"
            className="float-left" />
           
            <span className="temperature">6 </span>
            <span className="unit">°C</span>
        </div>
        <div className="row">
        <div className="col-6">
            <ul className="weather-extras">
                <li>percipitation</li>
                <li>humidity </li>
                 <li>wind</li>
            </ul>
        </div>
        </div>
    </div>
   
    </div>
}


export default Weather;