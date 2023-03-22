import React, { Component, Ref } from 'react'
import './date.scss'

interface TextInputProps {
  inputRef: Ref<HTMLInputElement>
}
export default class Date extends Component<TextInputProps> {
  render() {
    const { inputRef } = this.props
    return (
      <div className="forms-date">
        <label className="forms-date__label" htmlFor="date">
          <span className="forms-date__text">Birthdate</span>
        </label>
        <div className="forms-date__date-input">
          <input
            className="forms-date__birthdate"
            type="date"
            name="birthdate"
            id="date"
            maxLength={10}
            ref={inputRef}
          />
        </div>
      </div>
    )
  }
}
