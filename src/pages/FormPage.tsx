import React, { useState } from 'react'
import { Form } from '../components/forms/form/form'
import { SubmittedCard } from '../components/forms/submittedCard/submittedCard'
import { Notification } from '../components/forms/notification/notification'
import { FormFields } from '../types/formFields'
import '../assets/FormPage.scss'

export function FormPage() {
  const [showAlert] = useState(null)
  const [submittedCards, setSubmittedCards] = useState<FormFields[]>([])
  const addSubmittedCard = (card: FormFields) => {
    setSubmittedCards((prev) => [...prev, card])
  }

  return (
    <div className="form-page">
      <Notification show={showAlert} />
      <div className="form-page__collage form-collage">
        <div className="form-collage__left">
          <img className="l-img1" src="/img/collage/left1.jpg" alt="" />
          <img className="l-img2" src="/img/collage/left2.jpg" alt="" />
          <img className="l-img3" src="/img/collage/left3.jpg" alt="" />
          <img className="l-img4" src="/img/collage/left4.jpg" alt="" />
        </div>
        <div className="form-collage__right">
          <img className="r-img1" src="/img/collage/right1.jpg" alt="" />
          <img className="r-img2" src="/img/collage/right2.jpg" alt="" />
          <img className="r-img3" src="/img/collage/right3.jpg" alt="" />
          <img className="r-img4" src="/img/collage/right4.jpg" alt="" />
        </div>
      </div>
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
