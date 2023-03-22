import React, { Component, Ref } from 'react'
import './switcher.scss'

interface SwitcherProps {
  inputRef: Ref<HTMLInputElement>
}
export default class Switcher extends Component<SwitcherProps> {
  render() {
    const { inputRef } = this.props
    return (
      <div className="switch-button__container">
        <p className="switch-button__description">
          I would like to receive news and marketing offers.
        </p>
        <div className="switch-button">
          <input
            className="switch-button-checkbox"
            name="news"
            type="checkbox"
            id="switcher"
            defaultChecked
            ref={inputRef}
          />
          <label className="switch-button__label" htmlFor="switcher">
            <span className="switch-button__label-span">Yes</span>
          </label>
        </div>
      </div>
    )
  }
}
