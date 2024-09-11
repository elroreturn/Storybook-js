import React from 'react'
import { render } from '@testing-library/react'
import CityInfo from './CityInfo'

test('CityInfo render', async () => {

    // Arrange - Act
    const city = 'Montevideo'
    const country = 'Uruguay'

    const { findAllByRole } = render(<CityInfo city={city} country={country}></CityInfo>)

    // Assert
    const cityInfoComponents = await findAllByRole('heading')

    expect(cityInfoComponents[0]).toHaveTextContent(city)
    expect(cityInfoComponents[1]).toHaveTextContent(country)
})