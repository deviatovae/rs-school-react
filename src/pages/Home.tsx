import React, { Component } from 'react'
import '../assets/Home.scss'
import SearchBar from '../components/searchBar'

export default class Home extends Component {
  render() {
    return (
      <div className="home__container">
        <div className="home__page">Home</div>
        <SearchBar />
      </div>
    )
  }
}
