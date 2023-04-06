import React from 'react'
import '../assets/Home.scss'
import { SearchBar } from '../components/searchBar/searchBar'
import { CardList } from '../components/card/cardList'

export function Home() {
  return (
    <div className="home__container">
      <SearchBar />
      <CardList />
    </div>
  )
}
