import React from 'react'
import { describe, expect, it, Mock, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import CardList from './cardList'
import { Card } from '../../types/card'

describe('CardList', () => {
  it('Should render a list of cards', async () => {
    const cards: Card[] = [
      {
        id: 1,
        name: 'candle1',
        price: 9.99,
        time: 40,
        rating: '****',
        image: '/src/1.jpg',
      },
      {
        id: 2,
        name: 'candle2',
        price: 9.99,
        time: 40,
        rating: '****',
        image: '/src/2.jpg',
      },
    ]

    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(cards),
      })
    ) as Mock

    render(<CardList />)

    await waitFor(() => screen.getAllByTestId('card'))

    expect(screen.getAllByTestId('card')).length(cards.length)
  })
})
