import React from 'react'
import { describe, expect, it } from 'vitest'
import { fireEvent, screen } from '@testing-library/react'
import { SearchBar } from './searchBar'
import { renderWithProviders } from '../../utils/testUtils'

describe('SearchBar', () => {
  it('Should render a searchbar', async () => {
    const query = 'Need more candles'

    renderWithProviders(<SearchBar />, {
      preloadedState: {
        search: query,
      },
    })

    const input = screen.getByTestId('searchInput')
    expect(input).not.toBeNull()
    expect(input).toHaveValue(query)

    fireEvent.change(input, { target: { value: 'test' } })
    expect(input).toHaveValue('test')
  })
})
