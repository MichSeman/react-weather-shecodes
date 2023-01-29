import React from "react"; 
import "./Weather.css";

function Weather() {
    return <div className="Weather"> 
    <h1>Athens</h1>
    <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly Cloudy</li>
    </ul>
    <div className="row">
        <div className="col-6">
            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="mostly cloudy">
            </img>
            6 degrees
        </div>
        <div className="col-6">

        </div>
    </div>
   
    </div>
}


export default Weather;