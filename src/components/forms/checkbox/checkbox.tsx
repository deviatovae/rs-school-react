import React, { Component, Ref } from 'react'
import './checkbox.scss'

interface TextInputProps {
  inputRef: Ref<HTMLInputElement>
  error?: string
  onChange: () => void
}
export default class Checkbox extends Component<TextInputProps> {
  render() {
    const { inputRef, error, onChange } = this.props
    return (
      <div className="forms-checkbox">
        <div className="forms-checkbox__content">
          <input
            data-testid="input-consent"
            className="forms-checkbox__box"
            type="checkbox"
            name="consent"
            id="consent"
            ref={inputRef}
            onChange={onChange}
          />
          <span className="forms-checkbox__tick">✔</span>
          <label className="forms-checkbox__consent-label" htmlFor="consent">
            I have read and understood the <u>Terms & Conditions</u> and{' '}
            <u>Privacy Policy</u>
          </label>
        </div>
        {!!error && (
          <span className="forms-checkbox__error-message">{error}</span>
        )}
      </div>
    )
  }
}
