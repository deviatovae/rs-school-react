import React, { Component } from 'react'
import { Form } from 'react-router-dom'
import './searchBar.scss'
import { Icon } from '@iconify/react'

export default class SearchBar extends Component {
  render() {
    return (
      <Form>
        <div className="search-bar">
          <input
            className="search-bar__input"
            type="text"
            placeholder="Search..."
          />
          <Icon
            className="search-bar__search"
            icon="ph:magnifying-glass"
            color="#222"
            width="20"
            height="20"
          />
          <Icon
            className="search-bar__cross"
            icon="ant-design:close-circle-outlined"
            color="#222"
            width="20"
            height="20"
          />
        </div>
      </Form>
    )
  }
}
