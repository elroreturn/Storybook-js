import React from 'react'
import PropTypes from 'prop-types'
import 'typeface-roboto';
import Grid from '@mui/material/Grid'

import CityInfo from '../city-info'
import Weather from '../weather'

// renderCityAndCountry will be converted into a func which returns another func onClickCity
const renderCityAndCountry = eventOnClickCity => cityAndCountry => {
  const { city, country } = cityAndCountry
  return (
    <li key={city} onClick={eventOnClickCity}>
      <Grid container justify='center' alignItems='center'>
        <Grid item md={8} xs={12}>
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid item md={4} xs={12}>
          <Weather temperature={25} state='sunny' />
        </Grid>
      </Grid>
    </li>
  )
}

const CityList = ({ cities, onClickCity }) => {
  return (
    <ul>
        {
          cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry))
        }
    </ul>
  )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired,
    onClickCity: PropTypes.func.isRequired
}

export default CityList