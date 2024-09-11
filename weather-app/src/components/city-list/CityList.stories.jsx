import React from 'react'
import CityList from './CityList'

export default {
    title: 'CityList',
    component: CityList
}

const cities = [
    { city: 'Montevideo', country: 'Uruguay' },
    { city: 'Buenos Aires', country: 'Argentina' },
    { city: 'Bogota', country: 'Colombia' },
]

export const CityLisExample = () => ( <CityList cities={cities} ></CityList>)