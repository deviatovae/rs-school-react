import React from 'react'
import './switcher.scss'
import { UseFormRegister } from 'react-hook-form'
import { FormFields } from '../../../types/formFields'

interface SwitcherProps {
  error?: string
  register: ReturnType<UseFormRegister<FormFields>>
}

export function Switcher({ error, register }: SwitcherProps) {
  return (
    <div className="switch-button">
      <div className="switch-button__content">
        <span>I would like to receive news and marketing offers.</span>
        <div className="switch-button__box">
          <input
            {...register}
            data-testid="input-news"
            type="radio"
            id="radio-one"
            defaultValue="yes"
          />
          <label htmlFor="radio-one">Yes</label>
          <input {...register} id="radio-two" type="radio" defaultValue="" />
          <label htmlFor="radio-two">No</label>
        </div>
      </div>
      {!!error && <span className="switch-button__error">{error}</span>}
    </div>
  )
}
