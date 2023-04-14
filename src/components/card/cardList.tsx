import React, { useEffect, useState } from 'react'
import './card.scss'
import type { Card as CardType } from '../../types/card'
import { Card } from './card'
import './cardList.scss'
import { Loader } from '../loader/loader'
import { fetchCard, fetchCards } from '../../api/cardsApi'
import { SearchResults } from '../search/searchResults'

interface CardListProps {
  selectCard: (card: CardType) => void
  searchQuery: string
}

export function CardList({ selectCard, searchQuery }: CardListProps) {
  const [cards, setCards] = useState<CardType[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isActive = true
    const timeoutId = setTimeout(() => {
      setIsLoading(true)
      fetchCards(searchQuery).then((cardList) => {
        if (isActive) {
          setCards(cardList)
          setIsLoading(false)
        }
      })
    }, 0)

    return () => {
      clearTimeout(timeoutId)
      isActive = false
    }
  }, [searchQuery])

  return (
    <Loader isLoading={isLoading}>
      {searchQuery && (
        <SearchResults searchValue={searchQuery} hasCards={!!cards.length} />
      )}
      <div className="card-list">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onClick={async () => selectCard(await fetchCard(card.id))}
          />
        ))}
      </div>
    </Loader>
  )
}
