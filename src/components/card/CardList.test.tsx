import React from 'react'
import { describe, it } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import { CardList } from './cardList'
import { store } from '../../store/store'
import { cards } from '../../mocks/cards'

describe('CardList', () => {
  it('Should render a list of cards', async () => {
    render(
      <Provider store={store}>
        <CardList selectCard={() => null} />
      </Provider>
    )

    await waitFor(() => {
      cards.forEach(({ id }) => screen.getByTestId(`card-${id}`))
    })
  })
})
