import React, { Component } from 'react'
import './submittedForm.scss'

export default class SubmittedForm extends Component {
  render() {
    return (
      <div className="form-card">
        <div className="form-card__content">
          <div className="form-card__image">
            <img src="../../../../public/img/cards/1.jpeg" alt="avatar" />
          </div>
          <div className="form-card__info form-card-info">
            <div className="form-card-info__image-name">photo.name</div>
            <span className="form-card-info__country">Alena Deviatova</span>
            <span className="form-card-info__country">Russian Federation</span>
            <span className="form-card-info__news">News alert: Yes</span>
            <span className="form-card-info__news">
              Privacy Policy: Accepted
            </span>
          </div>
        </div>
      </div>
    )
  }
}
