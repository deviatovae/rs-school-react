import React, { useEffect, useState } from 'react'
import './card.scss'
import type { Card as CardType } from '../../types/card'
import { Card } from './card'
import './cardList.scss'
import { Loader } from '../loader/loader'
import { fetchCard, useGetCardsQuery } from '../../api/cardsApi'
import { SearchResults } from '../search/searchResults'

interface CardListProps {
  selectCard: (cardId: string) => void
  searchQuery: string
}

export function CardList({ selectCard, searchQuery }: CardListProps) {
  const { isLoading, data: cards } = useGetCardsQuery(searchQuery)

  return (
    <Loader isLoading={isLoading}>
      {searchQuery && (
        <SearchResults searchValue={searchQuery} hasCards={!!cards?.length} />
      )}
      <div className="card-list">
        {cards &&
          cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              onClick={async () => selectCard(card.id.toString())}
            />
          ))}
      </div>
    </Loader>
  )
}
