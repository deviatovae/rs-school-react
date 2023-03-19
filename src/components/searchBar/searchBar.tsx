import React, { ChangeEvent, Component } from 'react'
import './searchBar.scss'
import { Icon } from '@iconify/react'
import { Storage } from '../../utils/storage'

type SearchBarProps = Record<string, never>
interface SearchBarState {
  value: string
}

export default class SearchBar extends Component<
  SearchBarProps,
  SearchBarState
> {
  constructor(props: SearchBarProps) {
    super(props)
    this.state = {
      value: Storage.get('search'),
    }
  }

  componentWillUnmount() {
    const { value } = this.state
    Storage.save('search', value)
  }

  onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    this.setState({ value: e.target.value })
  }

  clearSearch = (): void => {
    this.setState({ value: '' })
  }

  render() {
    const { value } = this.state
    return (
      <div className="search-bar">
        <input
          className="search-bar__input"
          value={value}
          type="text"
          placeholder="Search..."
          onChange={this.onChange}
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
          onClick={this.clearSearch}
        />
      </div>
    )
  }
}