import react from "react";
import WeatherIcon from "./WeatherIcon";


function WeatherCard({weatherData}){
    return(
        <div className='mt-2 p-3 weatherCard d-flex'>
            {weatherData ? (
                <div className='weatherItem flex-wrap d-flex flex-row align-items-start justify-content-between'>
                    <h3 className='w-100'>{weatherData.name}</h3>
                    <div className='weatherTemp'>
                        <WeatherIcon className={"d-block weatherimage" + weatherData.weather[0].icon} />
                        <span className='weatherTempValue'>{weatherData.main.temp}°C</span>
                    </div>
                    <div className='w-50 weatherDescription'>
                        <div className='minorValues'>
                            <span className='minorVals'>
                                <i className='wi-humidity'></i> {weatherData.main.humidity}%
                            </span>
                            <span className='minorVals'>
                                <i className='wi-forecast-io-wind'></i> {weatherData.wind.speed} m/s
                            </span>

                        </div>
                        <span className='weatherDescriptionValue'>{weatherData.weather[0].main} | <span>Feels Like {weatherData.main.feels_like}°C </span></span>
                        <h3 className='weatherFullDescription'>{weatherData.weather[0].description}</h3>
                    </div>
                </div>
            ) : (
                <div className='w-100 text-center'>
                    <h3 className=''>No City Found</h3>
                </div>
            )}
        </div>
    )
}
export default WeatherCard