import React, { Component } from 'react'
import '../assets/Forms.scss'
import Select from '../components/forms/select/select'
import TextInput from '../components/forms/textInput/textInput'

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
          <Select />
          <TextInput />
        </div>
      </div>
    )
  }
}
