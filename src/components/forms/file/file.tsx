import React, { Component } from 'react'
import './file.scss'

export default class File extends Component {
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
