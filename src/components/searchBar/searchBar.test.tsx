import React from 'react'
import { describe, expect, it } from 'vitest'
import { fireEvent, render } from '@testing-library/react'
import { SearchBar } from './searchBar'

describe('SearchBar', () => {
  it('Should render a searchbar', async () => {
    const { container } = render(<SearchBar />)

    const input = container.querySelector(
      'input.search-bar__input'
    ) as HTMLInputElement
    expect(input).not.toBeNull()
    expect(input).toHaveValue('')

    fireEvent.change(input, { target: { value: 'test' } })
    expect(input).toHaveValue('test')
  })
})
