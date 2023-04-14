import React, { MouseEventHandler } from 'react'
import { Icon } from '@iconify/react'
import './card.scss'
import type { Card as CardType } from '../../types/card'

interface CardProps {
  card: CardType
  onClick?: MouseEventHandler
}

export function Card({
  card: { name, price, time, rating, image },
  onClick,
}: CardProps) {
  return (
    <div
      className="card"
      data-testid="card"
      onClick={onClick}
      aria-hidden="true"
    >
      <div className="card__content">
        <img
          className="card__img"
          src={image}
          alt="candle"
          data-testid="cardImage"
        />
        <h1 className="card__name" data-testid="cardName">
          {name}
        </h1>
        <div className="card__middle card-middle">
          <span className="card-middle__price" data-testid="cardPrice">
            {price}$
          </span>
          <div className="card-middle__time">
            <Icon icon="akar-icons:fire" color="#222" width="16" height="16" />
            <span className="card-middle__time-count" data-testid="cardTime">
              {time}h
            </span>
          </div>
        </div>
        <span className="card__rating" data-testid="cardRating">
          {'⋆'.repeat(rating)}
        </span>
      </div>
    </div>
  )
}
