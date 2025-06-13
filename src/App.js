import React, { useState, useEffect } from 'react';

import WeatherCard from './components/WeatherCard';
import SearchInput from './components/SearchInput';
import StartLoader from './components/Loader'

function App() {
    const [time, setTime] = useState(new Date())
    const [isLoading, setIsLoading] = useState('hide');
    const [weatherData, setWeatherData] = useState(null);
     useEffect(()=>{
       if(weatherData){
            console.log(weatherData,"weatherData")
       }    
    }, [weatherData])
    return (

        <div className='conatiner'>
            <StartLoader className={isLoading} />
            <div className='mb-5'>
                <div className='text-center'>
                    <h1 className='topHeader'>Weather Application</h1>
                </div>
            </div>
            <div className='weatherContainer'>
                <div className='weatherInnerBox'>
                    <SearchInput setIsLoading={setIsLoading} setWeatherData={setWeatherData}/>

                    <WeatherCard weatherData={weatherData}/>
                </div>
            </div>
        </div>
    )
}

export default App;
