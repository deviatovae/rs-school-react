import React, { Component } from 'react'
import './submittedForm.scss'

export default class SubmittedForm extends Component {
  render() {
    return (
      <div className="form-card">
        <div className="form-card__content">
          <div className="form-card__img-container">
            <div className="form-card__image">
              <img src="/img/cards/1.jpeg" alt="avatar" />
            </div>
          </div>
          <div className="form-card__info form-card-info">
            <span className="form-card-info__name">Chilly Pepper</span>
            <span className="form-card-info__birthdate">25.06.1990</span>
            <span className="form-card-info__country">Chile</span>
            <span className="form-card-info__news">News alert: Yes</span>
            <span className="form-card-info__policy">
              Privacy Policy: Accepted
            </span>
            <div className="form-card-info__image-name">Image: photoname</div>
          </div>
        </div>
      </div>
    )
  }
}
