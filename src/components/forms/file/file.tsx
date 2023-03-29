import React, { Component, Ref } from 'react'
import './file.scss'

interface TextInputProps {
  inputRef: Ref<HTMLInputElement>
  error?: string
  onChange: () => void
}
export default class File extends Component<TextInputProps> {
  render() {
    const { inputRef, error, onChange } = this.props
    const errorClass = error ? 'error-border' : ''
    return (
      <div className="forms-file">
        {!error && (
          <span className="forms-file__title">Upload a profile image</span>
        )}
        {!!error && <span className="forms-file__error-message">{error}</span>}
        <input
          data-testid="input-file"
          className={`forms-file__upload ${errorClass}`}
          type="file"
          name="file"
          id="file-upload"
          ref={inputRef}
          onChange={onChange}
        />
      </div>
    )
  }
}
