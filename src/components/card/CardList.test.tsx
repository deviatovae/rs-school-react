import React from 'react'
import { describe, it } from 'vitest'
import { screen, waitFor } from '@testing-library/react'
import { CardList } from './cardList'
import { cards } from '../../mocks/cards'
import { renderWithProviders } from '../../utils/testUtils'

describe('CardList', () => {
  it('Should render a list of cards', async () => {
    renderWithProviders(<CardList selectCard={() => null} />)

    await waitFor(() => {
      cards.forEach(({ id }) => screen.getByTestId(`card-${id}`))
    })
  })
})
