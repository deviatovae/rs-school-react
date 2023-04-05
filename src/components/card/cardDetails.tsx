import React from 'react'
import './cardDetails.scss'
import { Icon } from '@iconify/react'
import type { Card as CardType } from '../../types/card'

interface CardDetailsProps {
  card: CardType
}
export function CardDetails({
  card: { name, price, image, time, rating, description },
}: CardDetailsProps) {
  return (
    <div className="card-details__container">
      <div className="card-details__content">
        <div className="card-details__image-container image-container">
          <img src={image} alt="" />
        </div>
        <div className="card-details__info card-info">
          <h1 className="card-info__title">{name}</h1>
          <span className="card-info__rating">{'⋆'.repeat(rating)}</span>
          <span className="card-info__price">{price}$</span>
          <p className="card-info__description">{description}</p>
          <div className="card-info__time">
            <Icon icon="akar-icons:fire" color="#222" width="16" height="16" />
            <span className="card-info__time-count">
              Hour Burn Time: {time}h
            </span>
          </div>
          <div className="card-info__review card-review">
            <div className="card-review__feedback">
              <span className="card-review__stars">☆☆☆☆☆</span>
              <span className="card-review__text">
                Your feedback is much appreciated!
              </span>
            </div>
            <div className="card-info__submit">Write a review</div>
          </div>
        </div>
      </div>
    </div>
  )
}
