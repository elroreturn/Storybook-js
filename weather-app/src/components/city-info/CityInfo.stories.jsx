import React from 'react'
import CityInfo from './CityInfo'

export default {
    title: 'CityInfo',
    component: CityInfo
}

export const CityExample = () => (
    <CityInfo city='Montevideo' country='Uruguay'></CityInfo>
)