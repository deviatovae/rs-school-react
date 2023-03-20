import React, { Component } from 'react'
import './select.scss'

export default class Select extends Component {
  render() {
    return (
      <div className="forms-country">
        <label className="forms-country__label" htmlFor="country">
          <span className="forms-country__text">Country</span>
        </label>
        <div className="forms-country__select">
          <select
            className="forms-country__county-code"
            name="countryCode"
            id="country"
            required
          >
            <option value="france">France</option>
          </select>
        </div>
      </div>
    )
  }
}
