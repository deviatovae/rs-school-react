import React, { Component, Ref } from 'react'
import './date.scss'

interface TextInputProps {
  inputRef: Ref<HTMLInputElement>
  error?: string
  onChange: () => void
}
export default class Date extends Component<TextInputProps> {
  render() {
    const { inputRef, error, onChange } = this.props
    const errorClass = error ? 'error-border' : ''
    return (
      <div className={`forms-date ${errorClass}`}>
        <label className="forms-date__label" htmlFor="date">
          {!error && <span className="forms-date__text">Birthdate</span>}
          {!!error && (
            <span className="forms-date__error-message">{error}</span>
          )}
        </label>
        <div className="forms-date__date-input">
          <input
            className="forms-date__birthdate"
            type="date"
            name="birthdate"
            id="date"
            maxLength={10}
            ref={inputRef}
            onChange={onChange}
          />
        </div>
      </div>
    )
  }
}
