import React, { Component, Ref } from 'react'
import './textInput.scss'

interface TextInputProps {
  inputRef: Ref<HTMLInputElement>
}

export default class TextInput extends Component<TextInputProps> {
  render() {
    const { inputRef } = this.props
    return (
      <div className="forms-field-name">
        <label className="forms-field-name__label" htmlFor="country">
          <span className="forms-field-name__text">Name/Surname</span>
        </label>
        <input
          className="forms-field-name__input"
          type="text"
          name="name"
          placeholder="Christine Bellerose"
          maxLength={30}
          ref={inputRef}
        />
      </div>
    )
  }
}
