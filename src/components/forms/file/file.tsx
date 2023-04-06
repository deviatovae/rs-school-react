import React from 'react'
import './file.scss'
import { UseFormRegister } from 'react-hook-form'
import { FormFields } from '../../../types/formFields'

interface TextInputProps {
  error?: string
  register: ReturnType<UseFormRegister<FormFields>>
}

export function File({ error, register }: TextInputProps) {
  const errorClass = error ? 'error-border' : ''
  return (
    <div className="forms-file">
      {!error && (
        <span className="forms-file__title">Upload a profile image</span>
      )}
      {!!error && <span className="forms-file__error-message">{error}</span>}
      <input
        {...register}
        data-testid="input-file"
        className={`forms-file__upload ${errorClass}`}
        type="file"
        id="file-upload"
      />
    </div>
  )
}
