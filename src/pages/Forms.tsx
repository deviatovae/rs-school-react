import React, { FormEventHandler, useEffect, useRef, useState } from 'react'
import '../assets/Forms.scss'
import { Select } from '../components/forms/select/select'
import { TextInput } from '../components/forms/textInput/textInput'
import { Date } from '../components/forms/date/date'
import { Checkbox } from '../components/forms/checkbox/checkbox'
import { Switcher } from '../components/forms/switcher/switcher'
import { File } from '../components/forms/file/file'
import { SubmittedForm } from '../components/forms/submittedForm/submittedForm'
import { FormErrors, FormFields } from '../types/formFields'
import { Notification } from '../components/forms/notification/notification'
import { ErrorMsg } from '../enums/errors'

export function Forms() {
  const [submittedCards, setSubmittedCards] = useState<FormFields[]>([])
  const [showAlert, setShowAlert] = useState<boolean | null>(null)
  const [errors, setErrors] = useState<FormErrors>({})

  const formRef = useRef<HTMLFormElement>(null)
  const countryRef = useRef<HTMLSelectElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)
  const birthdateRef = useRef<HTMLInputElement>(null)
  const newsYesRef = useRef<HTMLInputElement>(null)
  const newsNoRef = useRef<HTMLInputElement>(null)
  const consentRef = useRef<HTMLInputElement>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  const getFormFields = () => {
    const { current: country } = countryRef
    const { current: name } = nameRef
    const { current: birthdate } = birthdateRef
    const { current: newsYes } = newsYesRef
    const { current: newsNo } = newsNoRef
    const { current: consent } = consentRef
    const { current: file } = fileRef

    if (
      !country ||
      !name ||
      !birthdate ||
      !newsYes ||
      !newsNo ||
      !consent ||
      !file
    ) {
      return false
    }

    return { country, name, birthdate, newsYes, newsNo, consent, file }
  }

  const getFormValues = (): FormFields | null => {
    const fields = getFormFields()
    if (!fields) {
      return null
    }

    const { country, name, birthdate, newsYes, newsNo, consent, file } = fields
    if (!file.files) {
      return null
    }

    const { length: submittedCardsLength } = submittedCards

    return {
      id: submittedCardsLength,
      country: country.value,
      name: name.value,
      birthdate: birthdate.value,
      newsYes: newsYes.checked,
      newsNo: newsNo.checked,
      consent: consent.checked,
      file: file.files[0],
    }
  }

  const toggleAlert = (callback?: () => void) => {
    setShowAlert((prev) => !prev)
  }

  useEffect(() => {
    //   toggleAlert(() => {
    //     setTimeout(() => {
    //       toggleAlert()
    //     }, 3000)
    //   })

    const { current: form } = formRef
    if (form) {
      form.reset()
      setErrors({})
    }
  }, [submittedCards])

  const setError = (field: keyof FormErrors, message: string) => {
    setErrors((prev) => ({
      ...prev,
      [field]: message,
    }))
  }

  const validate = (): boolean => {
    const values = getFormValues()
    if (!values) {
      return false
    }

    const { country, name, file, consent, birthdate, newsYes, newsNo } = values
    let hasErrors = false

    if (!country) {
      hasErrors = true
      setError('country', ErrorMsg.COUNTRY)
    }

    if (!name) {
      hasErrors = true
      setError('name', ErrorMsg.NAME)
    }

    if (!birthdate) {
      hasErrors = true
      setError('birthdate', ErrorMsg.BIRTHDATE)
    }

    if (!newsNo && !newsYes) {
      hasErrors = true
      setError('news', ErrorMsg.NEWS)
    }

    if (!file) {
      hasErrors = true
      setError('file', ErrorMsg.FILE)
    }

    if (!consent) {
      hasErrors = true
      setError('consent', ErrorMsg.CONSENT)
    }

    return !hasErrors
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    const newCard = getFormValues()
    if (!newCard || !validate()) {
      return
    }

    setSubmittedCards((prev) => [...prev, newCard])
  }

  const { country, name, birthdate, news, file, consent } = errors
  return (
    <form onSubmit={handleSubmit} ref={formRef} data-testid="form">
      <Notification show={showAlert} />
      <div className="forms">
        <div className="form__collage form-collage">
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
        <div className="forms__container">
          <p className="forms__description">
            Become a member of Bougie Family today. It's free to join!
          </p>
          <h1 className="forms__client-details">Client details</h1>
          <h6 className="forms__requirements">(All fields are required)</h6>
          <Select inputRef={countryRef} error={country} />
          <TextInput inputRef={nameRef} error={name} />
          <Date inputRef={birthdateRef} error={birthdate} />
          <Switcher inputRef={newsYesRef} inputRef2={newsNoRef} error={news} />
          <File inputRef={fileRef} error={file} />
          <Checkbox inputRef={consentRef} error={consent} />
          <button
            className="forms__submit-btn"
            type="submit"
            data-testid="btn-submit"
          >
            <span>Submit</span>
          </button>
          {!!submittedCards.length && (
            <details className="forms__submitted-info">
              <summary>See your profile card</summary>
              <div
                className="forms__submitted-info-list"
                data-testid="form-cards"
              >
                {submittedCards.map((card) => (
                  <SubmittedForm key={card.id} fields={card} />
                ))}
              </div>
            </details>
          )}
        </div>
      </div>
    </form>
  )
}
