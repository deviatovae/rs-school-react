import React from 'react'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Card as CardType } from '../../types/card'
import { Card } from './card'

describe('Card', () => {
  it('Should render a card', () => {
    const card: CardType = {
      id: 1,
      name: 'candle1',
      price: 9.99,
      time: 40,
      rating: 3,
      image: '/src/1.jpg',
    }

    render(<Card card={card} />)

    expect(screen.getByTestId('cardName')).toHaveTextContent(card.name)
    expect(screen.getByTestId('cardImage')).toHaveAttribute('src', card.image)
    expect(screen.getByTestId('cardPrice')).toHaveTextContent(`${card.price}$`)
    expect(screen.getByTestId('cardTime')).toHaveTextContent(`${card.time}h`)
    expect(screen.getByTestId('cardRating')).toHaveTextContent(
      '⋆'.repeat(card.rating)
    )
  })
})
