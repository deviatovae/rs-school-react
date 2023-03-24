import React, { Component, Ref } from 'react'
import './switcher.scss'

interface SwitcherProps {
  inputRef: Ref<HTMLInputElement>
  inputRef2: Ref<HTMLInputElement>
}
export default class Switcher extends Component<SwitcherProps> {
  render() {
    const { inputRef, inputRef2 } = this.props
    return (
      <div className="switch-button">
        <p className="switch-button__description">
          I would like to receive news and marketing offers.
        </p>
        <div className="switch-button__content">
          <input
            className="switch-button-radio1"
            type="radio"
            id="radio-one"
            name="news"
            ref={inputRef}
          />
          <label htmlFor="radio-one">Yes</label>
          <input
            className="switch-button-radio2"
            type="radio"
            id="radio-two"
            name="news"
            ref={inputRef2}
          />
          <label htmlFor="radio-two">No</label>
        </div>
      </div>
    )
  }
}
