import React, { useState, useEffect } from 'react';
import MyButton from "../Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';

function SearchInput({ setWeatherData, setIsLoading }) {
    const [city, setCity] = useState('');
    const [error, setError] = useState('');
// 

    // Load saved city once on mount
    useEffect(() => {
        const savedCity = localStorage.getItem("lastCity");
        if (savedCity) {
            setCity(savedCity);
            searchCity(savedCity);
        }
    }, []);

    // Debounce city input
    useEffect(() => {
        const onlyAlphabets = /^[a-zA-Z\s]*$/;
        if (!city || city.length <= 3 || !onlyAlphabets.test(city)) {
            setError("Please enter a valid city name (min 4 letters, alphabets only).");
            return;
        }

        const delay = setTimeout(() => {
            searchCity(city);
        }, 1000);

        return () => clearTimeout(delay);
    }, [city]);
    const searchCity = async (inputCity = city) => {
        if (!navigator.onLine) {
            setError("Internet is not connected. Please check your connection.");
            setWeatherData(null);
            return;
        }

        setIsLoading('active');
        try {
            const apiKey = "e104d49ca99583ee20fdeeff5088ea6c";
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${apiKey}&units=metric`);
            const data = await response.json();

            if (data.cod === 404) {
                setError("City not found. Please enter a valid city name.");
                setWeatherData(null);
                return;
            }

            if (data.cod !== 200) {
                setError("An error occurred while fetching the weather data.");
                setWeatherData(null);
                return;
            }

            setError('');
            setWeatherData(data);
            localStorage.setItem("lastCity", inputCity);
        } catch (error) {
            setError("Network error or API issue.");
            setWeatherData(null);
        } finally {
            setIsLoading('hide');
        }
    };

    const searchHandler = (e) => {
        setCity(e.target.value);
    };

    const reloadData = () => {
        if (city.trim().length > 3) {
            searchCity(city);
        } else {
            setError("Please enter a valid city before refreshing.");
        }
    };

    return (
        <div className='p-3 d-flex justify-content-left align-items-left flex-column'>
            <div className='weatherInput d-flex flex-wrap align-items-center'>
                <input
                    type='text'
                    onChange={searchHandler}
                    value={city}
                    className='w-50 form-control'
                    placeholder='Enter City Name'
                />
                <MyButton className="weatherBtn" onClick={() => searchCity(city)} />
                <button
                    title="Refresh Weather"
                    onClick={reloadData}
                    style={{ background: "unset", border: "unset" }}
                >
                    <FontAwesomeIcon icon={faRotateRight} style={{ color: "#fff" }} size="lg" className='me-2' />
                </button>
                <span className='form-error mt-2' style={{ color: "white", fontSize: '14px' }}>{error}</span>
            </div>
        </div>
    );
}

export default SearchInput;
