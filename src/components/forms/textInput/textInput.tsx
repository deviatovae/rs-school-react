import React, { Component, Ref } from 'react'
import './textInput.scss'

interface TextInputProps {
  inputRef: Ref<HTMLInputElement>
  error?: string
  onChange: () => void
}

export default class TextInput extends Component<TextInputProps> {
  render() {
    const { inputRef, error, onChange } = this.props
    const errorClass = error ? 'error-border' : ''
    return (
      <div className={`forms-field-name ${errorClass}`}>
        <label className="forms-field-name__label" htmlFor="nameField">
          {!error && (
            <span className="forms-field-name__text">Name/Surname</span>
          )}
          {!!error && (
            <span className="forms-field-name__error-message">{error}</span>
          )}
        </label>
        <input
          className="forms-field-name__input"
          type="text"
          id="nameField"
          name="name"
          placeholder="Christine Bellerose"
          maxLength={30}
          ref={inputRef}
          onChange={onChange}
        />
      </div>
    )
  }
}
