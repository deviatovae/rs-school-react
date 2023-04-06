import React, { useState } from 'react'
import { Form } from '../components/forms/form/form'
import { SubmittedCard } from '../components/forms/submittedCard/submittedCard'
import { Notification } from '../components/forms/notification/notification'
import { FormFields } from '../types/formFields'
import '../assets/FormPage.scss'
import { Collage } from '../components/forms/collage/collage'
import { FormCard } from '../types/formCard'

export function FormPage() {
  const [showAlert, setShowAlert] = useState(false)
  const [submittedCards, setSubmittedCards] = useState<FormCard[]>([])
  const addSubmittedCard = ({
    name,
    birthdate,
    files,
    consent,
    country,
    news,
  }: FormFields) => {
    if (!files) {
      return
    }
    const file = files.item(0)
    if (!file) {
      return
    }

    setSubmittedCards((prev) => {
      return [
        ...prev,
        {
          id: prev.length,
          name,
          birthdate,
          file,
          consent,
          country,
          news,
        },
      ]
    })
    setShowAlert(true)
  }

  return (
    <div className="form-page">
      {showAlert && <Notification onHide={() => setShowAlert(false)} />}
      <Collage />
      <div className="form-page__form">
        <Form onSubmitted={addSubmittedCard} />
        {!!submittedCards.length && (
          <details className="form-page__submitted-info">
            <summary>See your profile card</summary>
            <div
              className="form-page__submitted-cards-list"
              data-testid="form-cards"
            >
              {submittedCards.map((card) => (
                <SubmittedCard key={card.id} fields={card} />
              ))}
            </div>
          </details>
        )}
      </div>
    </div>
  )
}
