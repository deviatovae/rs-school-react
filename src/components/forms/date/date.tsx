import React, { Ref } from 'react'
import './date.scss'

interface TextInputProps {
  inputRef: Ref<HTMLInputElement>
  error?: string
}

export function Date({ inputRef, error }: TextInputProps) {
  const today = new window.Date()
  const errorClass = error ? 'error-border' : ''
  return (
    <div className={`forms-date ${errorClass}`}>
      <label className="forms-date__label" htmlFor="date">
        {!error && <span className="forms-date__text">Birthdate</span>}
        {!!error && <span className="forms-date__error-message">{error}</span>}
      </label>
      <div className="forms-date__date-input">
        <input
          data-testid="input-birthdate"
          className="forms-date__birthdate"
          type="date"
          name="birthdate"
          id="date"
          max={`${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
            2,
            '0'
          )}-${today.getDate()}`}
          ref={inputRef}
        />
      </div>
    </div>
  )
}
