import React from 'react'
import { Provider } from 'react-redux'
import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Home } from './Home'
import { store } from '../store/store'
import { cards } from '../mocks/cards'

describe('Home', () => {
  it('Should render card modal with card details', async () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    )

    const testCard = cards[0]

    await waitFor(() => fireEvent.click(screen.getByTestId('card-3')))
    await waitFor(() => screen.getByTestId('modal'))

    await waitFor(() => screen.getByTestId('cardDetailsName'))

    expect(screen.getByTestId('cardDetailsName')).toHaveTextContent(
      testCard.name
    )
    expect(screen.getByTestId('cardDetailsDescription')).toHaveTextContent(
      testCard.description || ''
    )
    expect(screen.getByTestId('cardDetailsImage')).toHaveAttribute(
      'src',
      testCard.image
    )
    expect(screen.getByTestId('cardDetailsPrice')).toHaveTextContent(
      `${testCard.price}$`
    )
    expect(screen.getByTestId('cardDetailsTime')).toHaveTextContent(
      `${testCard.time}h`
    )
    expect(screen.getByTestId('cardDetailsRating')).toHaveTextContent(
      '⋆'.repeat(testCard.rating)
    )
  })
})
