import React from 'react'
import './cardDetails.scss'
import { Icon } from '@iconify/react'

export function CardDetails() {
  return (
    <div className="card-details__container">
      <div className="card-details__content">
        <div className="card-details__image-container image-container">
          <img src="../../../public/img/cards/1.jpeg" alt="" />
        </div>
        <div className="card-details__info card-info">
          <h1 className="card-info__title">Cereal - Soy candle</h1>
          <span className="card-info__rating">⋆⋆⋆⋆⋆</span>
          <span className="card-info__price">9.99$</span>
          <p className="card-info__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            non quis exercitationem culpa nesciunt nihil aut nostrum explicabo
            reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
            cupiditate. cupiditate. cupiditate. cupiditate. cupiditate.
            Voluptuary ducimus Voluptuary ducimus Voluptatum ducimus voluptas?
          </p>
          <div className="card-info__time">
            <Icon icon="akar-icons:fire" color="#222" width="16" height="16" />
            <span className="card-info__time-count">Hour Burn Time: 40h</span>
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
