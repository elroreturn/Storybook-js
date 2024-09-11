import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'
import 'typeface-roboto';
import { WiCloud, WiDayCloudy, WiDayFog, WiDaySunny, WiRain } from 'react-icons/wi'
import { IconContext } from 'react-icons/lib';

const validWeathers = ['cloud', 'cloudy', 'fog', 'sunny', 'rain'];
const stateByName = {
  cloud: WiCloud,
  cloudy: WiDayCloudy,
  fog: WiDayFog,
  sunny: WiDaySunny,
  rain: WiRain
}

const renderState = state => {
  let Icon = stateByName[state]
  // let Icon = state !== undefined ? stateByName[state] : stateByName['sunny']
  // let Icon = stateByName[state] && stateByName['sunny']
  return <Icon />
}

const Weather = ({temperature, state}) => {
  return (
    <>
        <IconContext.Provider value={{size: '2em'}}>
          { renderState(state) }
        </IconContext.Provider>
        <Typography display='inline' variant='h4'>{temperature} c</Typography>
    </>
  )
}

Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validWeathers).isRequired
}

export default Weather