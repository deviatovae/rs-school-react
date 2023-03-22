import React, { Component, Ref } from 'react'
import './file.scss'

interface TextInputProps {
  inputRef: Ref<HTMLInputElement>
}
export default class File extends Component<TextInputProps> {
  render() {
    const { inputRef } = this.props
    return (
      <div className="forms-file">
        <span className="forms-file__title">Upload a profile image</span>
        <input
          className="forms-file__upload"
          type="file"
          name="file"
          id="file-upload"
          ref={inputRef}
        />
      </div>
    )
  }
}
