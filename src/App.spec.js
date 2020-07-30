import React from 'react'
import { Router } from 'react-router-dom'
import { render, fireEvent } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import App from './App'

describe('Testing App Component', () => {
    const renderWithRouter = (component) => {
        const history = createMemoryHistory()
        return {
            ...render(
                <Router history={history}>
                    {component}
                </Router>
            )
        }
    }
    test('should handle render Home Dashboard', () => {
        const { container, getByTestId } = renderWithRouter(<App />) 
        const navbar = getByTestId('navbar')
        const link = getByTestId('home-link')
      
        expect(container.innerHTML).toMatch('Home page')
        expect(navbar).toContainElement(link)
        
    });

});