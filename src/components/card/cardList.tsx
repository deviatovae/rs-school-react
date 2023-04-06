import React, { useEffect, useState } from 'react'
import './card.scss'
import type { Card as CardType } from '../../types/card'
import { Card } from './card'
import './cardList.scss'
import { API_URL } from '../../types/const'
import { Loader } from '../loader/loader'

interface CardListProps {
  selectCard: (card: CardType) => void
}

export function CardList({ selectCard }: CardListProps) {
  const [cards, setCards] = useState<CardType[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(`${API_URL}/cards`)
      .then((res) => res.json() as Promise<CardType[]>)
      .then((cardList) => {
        setCards(cardList)
        setIsLoading(false)
      })
  }, [])

  return (
    <Loader isLoading={isLoading}>
      <div className="card-list">
        {cards.map((card) => (
          <Card key={card.id} card={card} onClick={() => selectCard(card)} />
        ))}
      </div>
    </Loader>
  )
}
