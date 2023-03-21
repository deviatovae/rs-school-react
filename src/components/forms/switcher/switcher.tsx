import React, { Component } from 'react'
import './switcher.scss'

export default class Switcher extends Component {
  render() {
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
            value="1"
          />
          <label className="switch-button__label" htmlFor="switcher">
            <span className="switch-button__label-span">Yes</span>
          </label>
        </div>
      </div>
    )
  }
}
