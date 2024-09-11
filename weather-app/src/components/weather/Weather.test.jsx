import React from 'react'
import { render } from '@testing-library/react'
import Weather from './Weather'
import '@testing-library/jest-dom/extend-expect'

test('Weather render: Sunny', async () => {
        // Arrange - Act
        const temp = 20
        const state = 'sunny'
    
        const { findAllByRole } = render(<Weather temperature={temp} state={state}></Weather>)
    
        // Assert
        const tempComponents = await findAllByRole('heading')
        expect(tempComponents[0]).toHaveTextContent(temp)
})