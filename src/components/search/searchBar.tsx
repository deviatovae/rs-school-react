import React, {
  ChangeEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from 'react'
import './searchBar.scss'
import { Icon } from '@iconify/react'
import { Storage } from '../../utils/storage'

interface SearchBarProps {
  onSearch: (value: string) => void
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const valueRef = useRef(Storage.get('search'))
  const [search, setSearch] = useState(valueRef.current)
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    valueRef.current = search
  }, [search])

  useEffect(() => {
    onSearch(Storage.get('search'))
  }, [onSearch])

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value)
  }

  const doSearch = () => {
    onSearch(search)
    setIsSearching(!!search.length)
    Storage.save('search', valueRef.current)
  }

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      doSearch()
    }
  }

  const clearSearch = (): void => {
    setSearch('')
    setIsSearching(false)
    onSearch('')
  }

  return (
    <div className="search-bar">
      <input
        className="search-bar__input"
        value={search}
        type="text"
        placeholder="Search..."
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
          onClick={doSearch}
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