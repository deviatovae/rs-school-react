import React from 'react'
import './checkbox.scss'
import { UseFormRegister } from 'react-hook-form'
import { FormFields } from '../../../types/formFields'

interface TextInputProps {
  error?: string
  register: ReturnType<UseFormRegister<FormFields>>
}

export function Checkbox({ error, register }: TextInputProps) {
  return (
    <div className="forms-checkbox">
      <div className="forms-checkbox__content">
        <input
          {...register}
          data-testid="input-consent"
          className="forms-checkbox__box"
          type="checkbox"
          id="consent"
        />
        <span className="forms-checkbox__tick">✔</span>
        <label className="forms-checkbox__consent-label" htmlFor="consent">
          I have read and understood the <u>Terms & Conditions</u> and{' '}
          <u>Privacy Policy</u>
        </label>
      </div>
      {!!error && (
        <span className="forms-checkbox__error-message">{error}</span>
      )}
    </div>
  )
}
