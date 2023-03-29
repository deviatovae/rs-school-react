import React, { ChangeEvent, useEffect, useState } from 'react'
import './searchBar.scss'
import { Icon } from '@iconify/react'
import { Storage } from '../../utils/storage'

export function SearchBar() {
  const [search, setSearch] = useState(Storage.get('search'))

  useEffect(() => {
    return () => {
      Storage.save('search', search)
    }
  }, [search])

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value)
  }

  const clearSearch = (): void => {
    setSearch('')
  }

  return (
    <div className="search-bar">
      <input
        className="search-bar__input"
        value={search}
        type="text"
        placeholder="Search..."
        onChange={onChange}
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
        onClick={clearSearch}
      />
    </div>
  )
}
