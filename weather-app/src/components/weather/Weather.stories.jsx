import React from 'react'
import Weather from './Weather'

export default {
    title: 'Weather',
    component: Weather
}

export const WeatherCloud = () => ( <Weather temperature={10} state='cloud' ></Weather>)
export const WeatherSunny = () => ( <Weather temperature={30} state='sunny' ></Weather>)
export const WeatherFog = () => ( <Weather temperature={9} state='fog' ></Weather>)
export const WeatherCloudy = () => ( <Weather temperature={-10} state='cloudy' ></Weather>)