import React, { Component } from 'react'
import './card.scss'
import type { Card as CardType } from '../../types/card'
import Card from './card'
import './cardList.scss'

interface CardListState {
  cards: CardType[]
}

export default class CardList extends Component<object, CardListState> {
  state: CardListState = {
    cards: [],
  }

  componentDidMount() {
    fetch('/api/cards.json')
      .then((res) => res.json() as Promise<CardType[]>)
      .then((cards) => {
        this.setState({ cards })
      })
  }

  render() {
    const { cards } = this.state
    return (
      <div className="card-list">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    )
  }
}
