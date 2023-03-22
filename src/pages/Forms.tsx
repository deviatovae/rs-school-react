import React, { Component, FormEventHandler } from 'react'
import '../assets/Forms.scss'
import Select from '../components/forms/select/select'
import TextInput from '../components/forms/textInput/textInput'
import Date from '../components/forms/date/date'
import Checkbox from '../components/forms/checkbox/checkbox'
import Switcher from '../components/forms/switcher/switcher'
import File from '../components/forms/file/file'
import SubmittedForm from '../components/forms/submittedForm/submittedForm'

export default class Forms extends Component {
  render() {
    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
      e.preventDefault()
      const formData = new FormData(e.currentTarget)
      // eslint-disable-next-line no-restricted-syntax
      for (const [key, value] of formData.entries()) {
        console.log(key, value)
      }
    }

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
            <Select />
            <TextInput />
            <Date />
            <Switcher />
            <File />
            <Checkbox />
            <button className="forms__submit-btn" type="submit">
              <span>Submit</span>
            </button>
            <details className="forms__submitted-info">
              <summary>See your profile card</summary>
              <div className="forms__submitted-info-list">
                <SubmittedForm />
                <SubmittedForm />
                <SubmittedForm />
                <SubmittedForm />
              </div>
            </details>
          </div>
        </div>
      </form>
    )
  }
}
