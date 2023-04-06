import React from 'react'
import './select.scss'
import { UseFormRegister } from 'react-hook-form'
import countries from '../../../data/countries.json'
import { FormFields } from '../../../types/formFields'

interface SelectProps {
  error?: string
  register: ReturnType<UseFormRegister<FormFields>>
}

export function Select({ error, register }: SelectProps) {
  const errorClass = error ? 'error-border' : ''
  return (
    <div className={`forms-country ${errorClass}`}>
      <label className="forms-country__label" htmlFor="country">
        {!error && <span className="forms-country__text">Country</span>}
        {!!error && (
          <span className="forms-country__error-message">{error}</span>
        )}
      </label>
      <div className="forms-country__select">
        <select
          {...register}
          data-testid="input-country"
          className="forms-country__county-code"
          id="country"
        >
          <option value="">&nbsp;</option>
          {countries.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
