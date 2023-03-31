import React from 'react'
import './date.scss'
import { UseFormRegister } from 'react-hook-form'
import { FormFields } from '../../../types/formFields'

interface TextInputProps {
  error?: string
  register: ReturnType<UseFormRegister<FormFields>>
}

export function Date({ error, register }: TextInputProps) {
  const today = new window.Date()
  const errorClass = error ? 'error-border' : ''
  return (
    <div className={`forms-date ${errorClass}`}>
      <label className="forms-date__label" htmlFor="date">
        {!error && <span className="forms-date__text">Birthdate</span>}
        {!!error && <span className="forms-date__error-message">{error}</span>}
      </label>
      <div className="forms-date__date-input">
        <input
          {...register}
          data-testid="input-birthdate"
          className="forms-date__birthdate"
          type="date"
          id="date"
          max={`${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
            2,
            '0'
          )}-${today.getDate()}`}
        />
      </div>
    </div>
  )
}
