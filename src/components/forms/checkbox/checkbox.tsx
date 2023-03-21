import React, { Component } from 'react'
import './checkbox.scss'

export default class Checkbox extends Component {
  render() {
    return (
      <div className="forms-checkbox">
        <input
          className="forms-checkbox__box"
          type="checkbox"
          name="consent"
          value="1"
          id="consent"
          required
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
