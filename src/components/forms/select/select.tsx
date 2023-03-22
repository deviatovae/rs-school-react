import React, { Component, Ref } from 'react'
import './select.scss'
import countries from '../../../../public/api/countries.json'

interface SelectProps {
  inputRef: Ref<HTMLSelectElement>
}

export default class Select extends Component<SelectProps> {
  render() {
    const { inputRef } = this.props
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
            ref={inputRef}
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
