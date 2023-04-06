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

    const { container } = render(<Card card={card} />)

    expect(screen.getByRole('heading')).toHaveTextContent(card.name)

    expect(container.querySelector('.card__img')).toHaveAttribute(
      'src',
      card.image
    )

    expect(container.querySelector('.card-middle__price')).toHaveTextContent(
      `${card.price}$`
    )

    expect(
      container.querySelector('.card-middle__time-count')
    ).toHaveTextContent(`${card.time}h`)

    expect(container.querySelector('.card__rating')).toHaveTextContent(
      '⋆'.repeat(card.rating)
    )
  })
})
