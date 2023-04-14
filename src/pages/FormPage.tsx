import React, { useState } from 'react'
import { Form } from '../components/forms/form/form'
import { SubmittedCard } from '../components/forms/submittedCard/submittedCard'
import { Notification } from '../components/forms/notification/notification'
import '../assets/FormPage.scss'
import { Collage } from '../components/forms/collage/collage'
import { useAppSelector } from '../hooks/hooks'

export function FormPage() {
  const submittedCards = useAppSelector((state) => state.formRequest)
  const [showAlert, setShowAlert] = useState(false)
  const addSubmittedCard = () => {
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
