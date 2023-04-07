import React from 'react'
import './searchResults.scss'
import { Icon } from '@iconify/react'

interface SearchResultsProps {
  searchValue: string
  hasCards: boolean
}
export function SearchResults({ searchValue, hasCards }: SearchResultsProps) {
  return (
    <div className="search-results">
      <div className="search-results__content">
        <h2 className="search-results__title">Search result for:</h2>
        <span>{searchValue}</span>
      </div>
      {!hasCards && (
        <div className="search-results__not-found">
          <Icon
            icon="carbon:warning-square-filled"
            color="#a785b2"
            width="32"
            height="32"
          />
          <span>No items matching your selection</span>
        </div>
      )}
    </div>
  )
}
