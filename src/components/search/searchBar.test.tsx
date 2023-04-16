import React from 'react'
import { describe, expect, it } from 'vitest'
import { fireEvent, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { SearchBar } from './searchBar'
import { store } from '../../store/store'

describe('SearchBar', () => {
  it('Should render a searchbar', async () => {
    const { container } = render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    )

    const input = container.querySelector(
      'input.search-bar__input'
    ) as HTMLInputElement
    expect(input).not.toBeNull()
    expect(input).toHaveValue('')

    fireEvent.change(input, { target: { value: 'test' } })
    expect(input).toHaveValue('test')
  })
})
