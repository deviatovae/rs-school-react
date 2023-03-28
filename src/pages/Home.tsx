import React, { Component } from 'react'
import '../assets/Home.scss'
import SearchBar from '../components/searchBar/searchBar'
import CardList from '../components/card/cardList'

export default class Home extends Component {
  render() {
    return (
      <div className="home__container">
        <SearchBar />
        <CardList />
      </div>
    )
  }
}
