import React from 'react'
import './card.scss'
import { Card } from './card'
import './cardList.scss'
import { Loader } from '../loader/loader'
import { useGetCardsQuery } from '../../api/cardsApi'
import { SearchResults } from '../search/searchResults'
import { useAppSelector } from '../../hooks/hooks'

interface CardListProps {
  selectCard: (cardId: string) => void
}

export function CardList({ selectCard }: CardListProps) {
  const searchQuery = useAppSelector((state) => state.search)
  const { isFetching, data: cards } = useGetCardsQuery(searchQuery)

  return (
    <Loader isLoading={isFetching}>
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
