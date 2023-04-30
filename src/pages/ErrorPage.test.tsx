import React from 'react'
import { describe, expect, it } from 'vitest'
import { screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { renderWithProviders } from '../utils/testUtils'
import ErrorPage from './ErrorPage'

describe('ErrorPage', () => {
  it('Should render a description of the error page', async () => {
    renderWithProviders(
      <BrowserRouter>
        <ErrorPage />
      </BrowserRouter>
    )

    expect(screen.getByText("OOPS! The page isn't found.")).toBeInTheDocument()
  })
})
