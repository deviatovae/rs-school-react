import React, { Component, createRef, FormEventHandler, RefObject } from 'react'
import '../assets/Forms.scss'
import Select from '../components/forms/select/select'
import TextInput from '../components/forms/textInput/textInput'
import Date from '../components/forms/date/date'
import Checkbox from '../components/forms/checkbox/checkbox'
import Switcher from '../components/forms/switcher/switcher'
import File from '../components/forms/file/file'
import SubmittedForm from '../components/forms/submittedForm/submittedForm'
import { FormFields } from '../types/formFields'

interface FormsState {
  submittedCards: FormFields[]
}

export default class Forms extends Component<object, FormsState> {
  state: FormsState = {
    submittedCards: [],
  }

  country: RefObject<HTMLSelectElement> = createRef<HTMLSelectElement>()

  name: RefObject<HTMLInputElement> = createRef<HTMLInputElement>()

  birthdate: RefObject<HTMLInputElement> = createRef<HTMLInputElement>()

  news: RefObject<HTMLInputElement> = createRef<HTMLInputElement>()

  consent: RefObject<HTMLInputElement> = createRef<HTMLInputElement>()

  file: RefObject<HTMLInputElement> = createRef<HTMLInputElement>()

  render() {
    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
      e.preventDefault()

      const { current: country } = this.country
      const { current: name } = this.name
      const { current: birthdate } = this.birthdate
      const { current: news } = this.news
      const { current: consent } = this.consent
      const { current: file } = this.file

      if (!country || !name || !birthdate || !news || !consent || !file) {
        return
      }

      const { files: fileList } = file
      if (!fileList) {
        return
      }

      this.setState(
        (prev) => ({
          submittedCards: [
            ...prev.submittedCards,
            {
              id: prev.submittedCards.length,
              country: country.value,
              name: name.value,
              birthdate: birthdate.value,
              news: news.checked,
              consent: consent.checked,
              file: fileList[0],
            },
          ],
        }),
        () => {
          country.value = ''
          name.value = ''
          birthdate.value = ''
          news.value = ''
          consent.value = ''
          file.value = ''
        }
      )
    }

    const { submittedCards } = this.state

    return (
      <form onSubmit={handleSubmit}>
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
            <Select inputRef={this.country} />
            <TextInput inputRef={this.name} />
            <Date inputRef={this.birthdate} />
            <Switcher inputRef={this.news} />
            <File inputRef={this.file} />
            <Checkbox inputRef={this.consent} />
            <button className="forms__submit-btn" type="submit">
              <span>Submit</span>
            </button>
            <details className="forms__submitted-info">
              <summary>See your profile card</summary>
              <div className="forms__submitted-info-list">
                {submittedCards.map((card) => (
                  <SubmittedForm key={card.id} fields={card} />
                ))}
              </div>
            </details>
          </div>
        </div>
      </form>
    )
  }
}
