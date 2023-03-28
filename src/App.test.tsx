import React from 'react'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

describe('App', () => {
  it('Should render App', () => {
    render(
      <MemoryRouter>
        <App pageTitle="Test Page" />
      </MemoryRouter>
    )
    expect(screen.getByRole('heading')).toHaveTextContent('Test Page')
  })
})
