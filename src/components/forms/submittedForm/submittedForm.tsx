import React, { Component } from 'react'
import './submittedForm.scss'

export default class SubmittedForm extends Component {
  render() {
    return (
      <div className="forms-file">
        <span className="forms-file__title">Upload a profile image</span>
        <input
          className="forms-file__upload"
          type="file"
          name="file"
          id="file-upload"
        />
      </div>
    )
  }
}
