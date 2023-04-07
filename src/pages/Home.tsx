import React, { useState } from 'react'
import '../assets/Home.scss'
import { SearchBar } from '../components/search/searchBar'
import { CardList } from '../components/card/cardList'
import { Modal } from '../components/modal/modal'
import { CardDetails } from '../components/card/cardDetails'
import type { Card as CardType } from '../types/card'

export function Home() {
  const [selectedCard, setSelectedCard] = useState<CardType | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const onSelectCard = (card: CardType) => {
    setSelectedCard(card)
  }

  return (
    <div className="home__container">
      {selectedCard && (
        <Modal closeModal={() => setSelectedCard(null)}>
          <CardDetails card={selectedCard} />
        </Modal>
      )}
      <SearchBar onSearch={(query) => setSearchQuery(query)} />
      <CardList selectCard={onSelectCard} searchQuery={searchQuery} />
    </div>
  )
}
