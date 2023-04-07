import React from 'react'
import { describe, expect, it, Mock, vi } from 'vitest'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { CardList } from './cardList'
import { Card } from '../../types/card'

describe('CardList', () => {
  it('Should render a list of cards', async () => {
    const cards: Card[] = [
      {
        id: 1,
        name: 'candle1',
        price: 9.99,
        time: 40,
        rating: 5,
        image: '/src/1.jpg',
      },
      {
        id: 2,
        name: 'candle2',
        price: 9.99,
        time: 40,
        rating: 5,
        image: '/src/2.jpg',
      },
    ]

    global.fetch = vi.fn((url: string) => {
      expect(url).eq('http://localhost:8080/cards?q=test')
      return Promise.resolve({
        json: () => Promise.resolve(cards),
      })
    }) as Mock

    render(<CardList searchQuery="test" selectCard={() => null} />)

    await waitFor(() => screen.getAllByTestId('card'))

    expect(screen.getAllByTestId('card')).length(cards.length)
  })

  it('Should render card modal with card details', async () => {
    const cards: Card[] = [
      {
        id: 3,
        name: 'candle3',
        price: 9.99,
        time: 40,
        rating: 5,
        image: '/src/3.jpg',
      },
    ]

    global.fetch = vi.fn((url: string) => {
      const response = url === 'http://localhost:8080/cards' ? cards : cards[0]
      return Promise.resolve({
        json: () => Promise.resolve(response),
      })
    }) as Mock

    render(<CardList searchQuery="" selectCard={() => null} />)

    await waitFor(() => fireEvent.click(screen.getByTestId('card')))

    await waitFor(() => screen.getByTestId('modal'))
  })
})
