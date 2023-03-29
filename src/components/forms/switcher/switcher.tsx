import React, { Ref } from 'react'
import './switcher.scss'

interface SwitcherProps {
  inputRef: Ref<HTMLInputElement>
  inputRef2: Ref<HTMLInputElement>
  error?: string
}

export function Switcher({ inputRef, inputRef2, error }: SwitcherProps) {
  return (
    <div className="switch-button">
      <div className="switch-button__content">
        <span>I would like to receive news and marketing offers.</span>
        <div className="switch-button__box">
          <input
            data-testid="input-news"
            type="radio"
            id="radio-one"
            name="news"
            ref={inputRef}
          />
          <label htmlFor="radio-one">Yes</label>
          <input type="radio" id="radio-two" name="news" ref={inputRef2} />
          <label htmlFor="radio-two">No</label>
        </div>
      </div>
      {!!error && <span className="switch-button__error">{error}</span>}
    </div>
  )
}
