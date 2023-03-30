import React, { FormEventHandler, useRef, useState } from 'react'
import './form.scss'
import { Select } from '../select/select'
import { TextInput } from '../textInput/textInput'
import { Date as DateInput } from '../date/date'
import { Checkbox } from '../checkbox/checkbox'
import { Switcher } from '../switcher/switcher'
import { File } from '../file/file'
import { FormErrors, FormFields } from '../../../types/formFields'
import { ErrorMsg } from '../../../enums/errors'

interface FormProps {
  onSubmitted: (card: FormFields) => void
}

export function Form({ onSubmitted }: FormProps) {
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

    return {
      id: Date.now(),
      country: country.value,
      name: name.value,
      birthdate: birthdate.value,
      newsYes: newsYes.checked,
      newsNo: newsNo.checked,
      consent: consent.checked,
      file: file.files[0],
    }
  }

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

    onSubmitted(newCard)

    const { current: form } = formRef
    if (form) {
      form.reset()
      setErrors({})
    }
  }

  const { country, name, birthdate, news, file, consent } = errors
  return (
    <form onSubmit={handleSubmit} ref={formRef} data-testid="form">
      <div className="form__container">
        <p className="form__description">
          Become a member of Bougie Family today. It's free to join!
        </p>
        <h1 className="form__client-details">Client details</h1>
        <h6 className="form__requirements">(All fields are required)</h6>
        <Select inputRef={countryRef} error={country} />
        <TextInput inputRef={nameRef} error={name} />
        <DateInput inputRef={birthdateRef} error={birthdate} />
        <Switcher inputRef={newsYesRef} inputRef2={newsNoRef} error={news} />
        <File inputRef={fileRef} error={file} />
        <Checkbox inputRef={consentRef} error={consent} />
        <button
          className="form__submit-btn"
          type="submit"
          data-testid="btn-submit"
        >
          <span>Submit</span>
        </button>
      </div>
    </form>
  )
}
