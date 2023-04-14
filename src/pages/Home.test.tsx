import React from 'react'
import { describe, expect, it, Mock, vi } from 'vitest'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Home } from './Home'
import { Card } from '../types/card'

describe('Home', () => {
  it('Should render card modal with card details', async () => {
    const card: Card = {
      id: 3,
      name: 'candle3',
      description: 'Balsam and oak moss mingle with aromatic...',
      price: 9.99,
      time: 40,
      rating: 5,
      image: '/src/3.jpg',
    }

    global.fetch = vi.fn((url: string) => {
      const response = url === 'http://localhost:8080/cards' ? [card] : card
      return Promise.resolve({
        json: () => Promise.resolve(response),
      })
    }) as Mock

    render(<Home />)

    await waitFor(() => fireEvent.click(screen.getByTestId('card')))
    await waitFor(() => screen.getByTestId('modal'))

    expect(screen.getByTestId('cardDetailsName')).toHaveTextContent(card.name)
    expect(screen.getByTestId('cardDetailsDescription')).toHaveTextContent(
      card.description || ''
    )
    expect(screen.getByTestId('cardDetailsImage')).toHaveAttribute(
      'src',
      card.image
    )
    expect(screen.getByTestId('cardDetailsPrice')).toHaveTextContent(
      `${card.price}$`
    )
    expect(screen.getByTestId('cardDetailsTime')).toHaveTextContent(
      `${card.time}h`
    )
    expect(screen.getByTestId('cardDetailsRating')).toHaveTextContent(
      '⋆'.repeat(card.rating)
    )
  })
})
