import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CityList from './CityList'
import '@testing-library/jest-dom/extend-expect'

const cities = [
        { city: 'Montevideo', country: 'Uruguay' },
        { city: 'Buenos Aires', country: 'Argentina' },
        { city: 'Bogota', country: 'Colombia' },
    ]

test('CityList renders', async () => {
        // Arrange - Act
        const { findAllByRole } = render(<CityList cities={cities} />)
    
        // Assert
        const items = await findAllByRole('listitem')
        expect(items).toHaveLength(cities.length)
})

test('CityList click on item', async () => {
        // Arrange
        const fnClickOnItem = jest.fn();

        // Act
        const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem} />)
        const items = await findAllByRole('listitem')
        fireEvent.click(items[0]);
    
        // Assert
        expect(fnClickOnItem).toHaveBeenCalledTimes(1);
})