import React, { useState } from 'react'
import '../assets/Home.scss'
import { SearchBar } from '../components/search/searchBar'
import { CardList } from '../components/card/cardList'
import { useCardModal } from '../hooks/useCardModal'

export function Home() {
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const { modal, showCardModal } = useCardModal(selectedCardId)

  const onSelectCard = (cardId: string) => {
    setSelectedCardId(cardId)
    showCardModal(true)
  }

  return (
    <div className="home__container">
      {modal}
      <SearchBar onSearch={(query) => setSearchQuery(query)} />
      <CardList selectCard={onSelectCard} searchQuery={searchQuery} />
    </div>
  )
}
