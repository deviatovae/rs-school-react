import React, { useEffect, useState } from 'react'
import './card.scss'
import type { Card as CardType } from '../../types/card'
import { Card } from './card'
import './cardList.scss'

export function CardList() {
  const [cards, setCards] = useState<CardType[]>([])

  useEffect(() => {
    fetch('/api/cards.json')
      .then((res) => res.json() as Promise<CardType[]>)
      .then((cardList) => {
        setCards(cardList)
      })
  }, [])

  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  )
}
