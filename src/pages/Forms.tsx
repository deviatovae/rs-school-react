import React, { Component } from 'react'
import '../assets/Forms.scss'
import Select from '../components/forms/select/select'
import TextInput from '../components/forms/textInput/textInput'
import Date from '../components/forms/date/date'
import Checkbox from '../components/forms/checkbox/checkbox'
import Switcher from '../components/forms/switcher/switcher'

export default class Forms extends Component {
  render() {
    return (
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
          <Checkbox />
        </div>
      </div>
    )
  }
}
