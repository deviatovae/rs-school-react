import React, { Component, Ref } from 'react'
import './switcher.scss'

interface SwitcherProps {
  inputRef: Ref<HTMLInputElement>
  inputRef2: Ref<HTMLInputElement>
  error?: string
  onChange: () => void
}
export default class Switcher extends Component<SwitcherProps> {
  render() {
    const { inputRef, inputRef2, error, onChange } = this.props
    return (
      <div className="switch-button">
        <div className="switch-button__content">
          <span className="switch-button__description">
            I would like to receive news and marketing offers.
          </span>
          <div>
            <input
              data-testid="input-news"
              className="switch-button-radio1"
              type="radio"
              id="radio-one"
              name="news"
              ref={inputRef}
              onChange={onChange}
            />
            <label htmlFor="radio-one">Yes</label>
            <input
              className="switch-button-radio2"
              type="radio"
              id="radio-two"
              name="news"
              ref={inputRef2}
              onChange={onChange}
            />
            <label htmlFor="radio-two">No</label>
          </div>
        </div>
        {!!error && <span className="switch-button__error">{error}</span>}
      </div>
    )
  }
}
