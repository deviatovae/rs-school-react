import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import './searchBar.scss'
import { Icon } from '@iconify/react'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { setSearch } from '../../store/searchSlice'

export function SearchBar() {
  const search = useAppSelector((state) => state.search)
  const [inputValue, setInputValue] = useState(search)
  const dispatch = useAppDispatch()

  const [isSearching, setIsSearching] = useState(!!search.length)

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value)
  }

  const submit = () => {
    setIsSearching(!!inputValue.length)
    dispatch(setSearch(inputValue))
  }

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      submit()
    }
  }

  const clearSearch = (): void => {
    setInputValue('')
    submit()
  }

  return (
    <div className="search-bar">
      <input
        className="search-bar__input"
        value={inputValue}
        type="text"
        placeholder="Search..."
        data-testid="searchInput"
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      {!isSearching && (
        <Icon
          className="search-bar__search"
          icon="ph:magnifying-glass"
          color="#222"
          width="20"
          height="20"
          onClick={submit}
        />
      )}
      {isSearching && (
        <Icon
          className="search-bar__cross"
          icon="ant-design:close-circle-outlined"
          color="#222"
          width="20"
          height="20"
          onClick={clearSearch}
        />
      )}
    </div>
  )
}
