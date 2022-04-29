import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Clock from './components/Clock';
import Date from './components/Date';
import Heat from './components/Heat';

function App() {
  // State
  const [apiData, setApiData] = useState({});
  const [getState, setGetState] = useState('udaipur');
  const [state, setState] = useState('udaipur');
  const [clicked, setClicked] = useState(false)

    const clickstat= ()=>{
        setClicked(true)

    }

  // API KEY AND URL
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `http://api.weatherapi.com/v1/current.json?key=a4f23caf1f2545de83a142102222804&q=${state}&aqi=yes`;
  ;

  // Side effect
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, [apiUrl]);


  const inputHandler = (event) => {
    setGetState(event.target.value);
  };

  const submitHandler = () => {
    setState(getState);
    setClicked(false);
  };
    return (

      <div className="container">



{apiData.location ?(
            <div className="app-container">
              <div className="app-top-bar">
                <button className="button button-small">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-brightness-alt-high" viewBox="0 0 16 16">
                    <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zm-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707l1.414 1.414zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4zm0 1a3 3 0 0 1 2.959 2.5H5.04A3 3 0 0 1 8 8z" />
                  </svg>
                </button>
                <h1 className="app-heading">Weather Stats</h1>

              </div>
              <Date localtime={apiData.location.localtime} />
              <Clock city={apiData.location.name} temp={apiData.current.temp_c} />
              <Heat condition={apiData.current.condition.icon} sky={apiData.current.condition.text} wind={apiData.current.wind_kph} />
              <div>
            { clicked ?
            <div className='form-search'>
            <input type="text" className='button input' onChange={inputHandler} value={getState}/>
            <button className="button input" onClick={submitHandler}>Search</button>
            
            </div>
            :
            <button className="button button-link" onClick={clickstat}>
                 Change City
            </button>}
        </div>
            </div>):
            <h1> no data found</h1>}

      </div >
       
    );
}


export default App;
