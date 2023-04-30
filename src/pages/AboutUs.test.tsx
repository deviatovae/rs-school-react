import React from 'react'
import { describe, expect, it } from 'vitest'
import { screen } from '@testing-library/react'
import { renderWithProviders } from '../utils/testUtils'
import { AboutUs } from './AboutUs'

describe('AboutUs', () => {
  it('Should render a description of the about-us page', async () => {
    renderWithProviders(<AboutUs />)

    expect(screen.getByText('Thanks for stopping by!')).toBeInTheDocument()
  })
})
