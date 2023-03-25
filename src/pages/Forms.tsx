import React, { Component, createRef, FormEventHandler, RefObject } from 'react'
import '../assets/Forms.scss'
import Select from '../components/forms/select/select'
import TextInput from '../components/forms/textInput/textInput'
import Date from '../components/forms/date/date'
import Checkbox from '../components/forms/checkbox/checkbox'
import Switcher from '../components/forms/switcher/switcher'
import File from '../components/forms/file/file'
import SubmittedForm from '../components/forms/submittedForm/submittedForm'
import { FormErrors, FormFields } from '../types/formFields'
import Notification from '../components/forms/notification/notification'
import { ErrorMsg } from '../enums/errors'

interface FormsState {
  submittedCards: FormFields[]
  showAlert: boolean | null
  errors: FormErrors
}

export default class Forms extends Component<object, FormsState> {
  state: FormsState = {
    submittedCards: [],
    showAlert: null,
    errors: {},
  }

  country: RefObject<HTMLSelectElement> = createRef<HTMLSelectElement>()

  name: RefObject<HTMLInputElement> = createRef<HTMLInputElement>()

  birthdate: RefObject<HTMLInputElement> = createRef<HTMLInputElement>()

  newsYes: RefObject<HTMLInputElement> = createRef<HTMLInputElement>()

  newsNo: RefObject<HTMLInputElement> = createRef<HTMLInputElement>()

  consent: RefObject<HTMLInputElement> = createRef<HTMLInputElement>()

  file: RefObject<HTMLInputElement> = createRef<HTMLInputElement>()

  handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    const { current: country } = this.country
    const { current: name } = this.name
    const { current: birthdate } = this.birthdate
    const { current: newsYes } = this.newsYes
    const { current: newsNo } = this.newsNo
    const { current: consent } = this.consent
    const { current: file } = this.file
    const errors: FormErrors = {}

    if (
      !country ||
      !name ||
      !birthdate ||
      !newsYes ||
      !newsNo ||
      !consent ||
      !file
    ) {
      return
    }

    const { files: fileList } = file
    if (!fileList) {
      return
    }

    if (!country.value) {
      errors.country = ErrorMsg.COUNTRY
    }

    if (!name.value) {
      errors.name = ErrorMsg.NAME
    }

    if (!birthdate.value) {
      errors.birthdate = ErrorMsg.BIRTHDATE
    }

    if (!newsNo.checked && !newsYes.checked) {
      errors.news = ErrorMsg.NEWS
    }

    if (!file.value) {
      errors.file = ErrorMsg.FILE
    }

    if (!consent.checked) {
      errors.consent = ErrorMsg.CONSENT
    }

    if (Object.keys(errors).length) {
      this.setState({
        errors,
      })
      return
    }

    this.setState(
      (prev) => ({
        ...prev,
        submittedCards: [
          ...prev.submittedCards,
          {
            id: prev.submittedCards.length,
            country: country.value,
            name: name.value,
            birthdate: birthdate.value,
            news: newsYes.checked,
            consent: consent.checked,
            file: fileList[0],
          },
        ],
      }),
      () => {
        this.toggleAlert(() => {
          setTimeout(() => {
            this.toggleAlert()
          }, 3000)
        })
        country.value = ''
        name.value = ''
        birthdate.value = ''
        newsYes.checked = false
        newsNo.checked = false
        consent.checked = false
        file.value = ''
      }
    )
  }

  private setError(field: keyof FormErrors, message: string) {
    this.setState((prev) => ({
      ...prev,
      errors: {
        ...prev.errors,
        [field]: message,
      },
    }))
  }

  toggleAlert = (callback?: () => void) => {
    this.setState(
      (prev) => ({
        ...prev,
        showAlert: !prev.showAlert,
      }),
      callback
    )
  }

  render() {
    const {
      submittedCards,
      showAlert,
      errors: { country, name, birthdate, news, file, consent },
    } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <Notification show={showAlert} />
        <div className="forms">
          <img
            className="forms__loyalty-card"
            src="../../public/img/loyalty-card.png"
            alt="loyalty card"
          />
          <div className="forms__container">
            <p className="forms__description">
              Become a member of Bougie Family today. It's free to join!
            </p>
            <h1 className="forms__client-details">Client details</h1>
            <h6 className="forms__requirements">(All fields are required)</h6>
            <Select
              inputRef={this.country}
              error={country}
              onChange={() => this.setError('country', '')}
            />
            <TextInput
              inputRef={this.name}
              error={name}
              onChange={() => this.setError('name', '')}
            />
            <Date
              inputRef={this.birthdate}
              error={birthdate}
              onChange={() => this.setError('birthdate', '')}
            />
            <Switcher
              inputRef={this.newsYes}
              inputRef2={this.newsNo}
              error={news}
              onChange={() => this.setError('news', '')}
            />
            <File
              inputRef={this.file}
              error={file}
              onChange={() => this.setError('file', '')}
            />
            <Checkbox
              inputRef={this.consent}
              error={consent}
              onChange={() => this.setError('consent', '')}
            />
            <button className="forms__submit-btn" type="submit">
              <span>Submit</span>
            </button>
            {!!submittedCards.length && (
              <details className="forms__submitted-info">
                <summary>See your profile card</summary>
                <div className="forms__submitted-info-list">
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
}
