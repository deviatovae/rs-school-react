import React from 'react'
import './textInput.scss'
import { UseFormRegister } from 'react-hook-form'
import { FormFields } from '../../../types/formFields'

interface TextInputProps {
  error?: string
  register: ReturnType<UseFormRegister<FormFields>>
}

export function TextInput({ error, register }: TextInputProps) {
  const errorClass = error ? 'error-border' : ''
  return (
    <div className={`forms-field-name ${errorClass}`}>
      <label className="forms-field-name__label" htmlFor="nameField">
        {!error && <span className="forms-field-name__text">Name/Surname</span>}
        {!!error && (
          <span className="forms-field-name__error-message">{error}</span>
        )}
      </label>
      <input
        {...register}
        data-testid="input-name"
        className="forms-field-name__input"
        type="text"
        id="nameField"
        placeholder="Christine Bellerose"
        maxLength={30}
      />
    </div>
  )
}
