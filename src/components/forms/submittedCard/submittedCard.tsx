import React from 'react'
import './submittedCard.scss'
import { FormCard } from '../../../types/formCard'

interface SubmittedFormProps {
  fields: FormCard
}

export function SubmittedCard({
  fields: { name, country, birthdate, news, file, consent },
}: SubmittedFormProps) {
  return (
    <div className="form-card" data-testid="form-card">
      <div className="form-card__content">
        <div className="form-card__img-container">
          <div className="form-card__image">
            <img
              src={URL.createObjectURL(file)}
              alt="avatar"
              data-testid="form-card-img"
            />
          </div>
        </div>
        <div className="form-card__info form-card-info">
          <span className="form-card-info__name" data-testid="form-card-name">
            {name}
          </span>
          <span
            className="form-card-info__birthdate"
            data-testid="form-card-birthdate"
          >
            Birthdate: {birthdate}
          </span>
          <span
            className="form-card-info__country"
            data-testid="form-card-country"
          >
            Country: {country}
          </span>
          <span className="form-card-info__news" data-testid="form-card-news">
            News alert: {news ? 'Yes' : 'No'}
          </span>
          <span
            className="form-card-info__policy"
            data-testid="form-card-consent"
          >
            Privacy Policy: {consent && 'Accepted'}
          </span>
          <div
            className="form-card-info__image-name"
            data-testid="form-card-file-name"
          >
            Image: {file?.name}
          </div>
        </div>
      </div>
    </div>
  )
}
