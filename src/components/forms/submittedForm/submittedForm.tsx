import React, { Component } from 'react'
import './submittedForm.scss'
import { FormFields } from '../../../types/formFields'

interface SubmittedFormProps {
  fields: FormFields
}
export default class SubmittedForm extends Component<SubmittedFormProps> {
  render() {
    const {
      fields: { name, country, birthdate, news, file, consent },
    } = this.props

    return (
      <div className="form-card">
        <div className="form-card__content">
          <div className="form-card__img-container">
            <div className="form-card__image">
              <img src={URL.createObjectURL(file)} alt="avatar" />
            </div>
          </div>
          <div className="form-card__info form-card-info">
            <span className="form-card-info__name">{name}</span>
            <span className="form-card-info__birthdate">
              Birthdate: {birthdate}
            </span>
            <span className="form-card-info__country">Country: {country}</span>
            <span className="form-card-info__news">
              News alert: {news ? 'Yes' : 'No'}
            </span>
            <span className="form-card-info__policy">
              Privacy Policy: {consent && 'Yes'}
            </span>
            <div className="form-card-info__image-name">Image: {file.name}</div>
          </div>
        </div>
      </div>
    )
  }
}
