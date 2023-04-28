import React from 'react'
import { describe, expect, it } from 'vitest'
import { fireEvent, screen } from '@testing-library/react'
import { SearchBar } from './searchBar'
import { renderWithProviders } from '../../utils/testUtils'
import { SearchResults } from './searchResults'

describe('SearchResults', () => {
  it('Should render search results', async () => {
    const query = 'I want to see candles'
    renderWithProviders(<SearchResults searchValue={query} hasCards={false} />)

    expect(screen.getByText(query)).toBeInTheDocument()
    expect(
      screen.getByText('No items matching your selection')
    ).toBeInTheDocument()
  })
})
