import React, { Component } from 'react'
import './date.scss'

export default class Date extends Component {
  render() {
    return (
      <div className="forms-date">
        <label className="forms-date__label" htmlFor="date">
          <span className="forms-date__text">Birthdate</span>
        </label>
        <div className="forms-date__date-input">
          <input
            className="forms-date__birthdate"
            type="date"
            name="dateCode"
            id="date"
            maxLength={10}
            required
          />
        </div>
      </div>
    )
  }
}
