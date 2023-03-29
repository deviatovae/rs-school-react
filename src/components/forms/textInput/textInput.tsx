import React, { Ref } from 'react'
import './textInput.scss'

interface TextInputProps {
  inputRef: Ref<HTMLInputElement>
  error?: string
}

export function TextInput({ inputRef, error }: TextInputProps) {
  const errorClass = error ? 'error-border' : ''
  return (
    <div className={`forms-field-name ${errorClass}`}>
      <label className="forms-field-name__label" htmlFor="nameField">
        {!error && <span className="forms-field-name__text">Name/Surname</span>}
        {!!error && (
          <span className="forms-field-name__error-message">{error}</span>
        )}
      </label>
      <input
        data-testid="input-name"
        className="forms-field-name__input"
        type="text"
        id="nameField"
        name="name"
        placeholder="Christine Bellerose"
        maxLength={30}
        ref={inputRef}
      />
    </div>
  )
}
