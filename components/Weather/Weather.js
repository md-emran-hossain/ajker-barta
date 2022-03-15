import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';


export default function Weather() {
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [weather, setWeather] = useState('');
    const [temperature, setTemperature] = useState(0);
    const [cityName, setCityName] = useState('');
    const [icon, setIcon] = useState(true);


    const savePositionToState = (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
    }

    const fetchWeather = async () => {
        try {
            await window.navigator.geolocation.getCurrentPosition(savePositionToState);
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=21ef79eeed10ef82330e0dba9f3665b2&units=metric`);
            setTemperature(res.data.main.temp);
            setCityName(res.data.name);
            setWeather(res.data.weather[0].main);
            setIcon(res.data.weather[0].icon);
        }
        catch (err) {
            return;
            // console.error(err);
        }
    };

    useEffect(() => {
        fetchWeather();
    }, [latitude, longitude]);

    return (

        <div className='flex items-center'>
            <img width='80px' height='80px' src={`http://openweathermap.org/img/w/${icon}.png`}
                alt="wthr img" />
            <div className=''>
                <h3 className="font-semibold">{weather}</h3>
                <h3 className='text-sm'>{temperature}</h3>
            </div>
        </div>
    );

}