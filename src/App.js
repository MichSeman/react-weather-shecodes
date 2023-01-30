
import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className='container'>
     <h1>Weather App</h1> 
     <Weather defaultCity="Athens"/>
      <footer>
       
        This project is created by {" "}
        <a href='https://astonishing-bombolone-2e17ca.netlify.app/'  target="_blank" rel="noreferrer">
          Michelle Seman
        </a> 
          {" "} and is
        <a href='https://github.com/MichSeman/react-weather-shecodes.git' target="_blank" rel="noreferrer"> open-sources on GitHub</a>
      </footer>
      </div>
    </div>
  );
}

export default App;
