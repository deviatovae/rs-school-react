import React, { Ref } from 'react'
import './select.scss'
import countries from '../../../data/countries.json'

interface SelectProps {
  inputRef: Ref<HTMLSelectElement>
  error?: string
}

export function Select({ inputRef, error }: SelectProps) {
  const errorClass = error ? 'error-border' : ''
  return (
    <div className={`forms-country ${errorClass}`}>
      <label className="forms-country__label" htmlFor="country">
        {!error && <span className="forms-country__text">Country</span>}
        {!!error && (
          <span className="forms-country__error-message">{error}</span>
        )}
      </label>
      <div className="forms-country__select">
        <select
          data-testid="input-country"
          className="forms-country__county-code"
          name="country"
          id="country"
          ref={inputRef}
        >
          <option value="">&nbsp;</option>
          {countries.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
