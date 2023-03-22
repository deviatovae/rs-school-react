import React, { Component, Ref } from 'react'
import './checkbox.scss'

interface TextInputProps {
  inputRef: Ref<HTMLInputElement>
}
export default class Checkbox extends Component<TextInputProps> {
  render() {
    const { inputRef } = this.props
    return (
      <div className="forms-checkbox">
        <input
          className="forms-checkbox__box"
          type="checkbox"
          name="consent"
          id="consent"
          ref={inputRef}
        />
        <span className="forms-checkbox__tick">✔</span>
        <label className="forms-checkbox__consent-label" htmlFor="consent">
          I have read and understood the <u>Terms & Conditions</u> and{' '}
          <u>Privacy Policy</u>
        </label>
      </div>
    )
  }
}
