import React, { Component } from 'react'
import './select.scss'
import countries from '../../../../public/api/countries.json'

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
            name="country"
            id="country"
            required
          >
            <option value="">&nbsp;</option>
            {countries.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    )
  }
}
