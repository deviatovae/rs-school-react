import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Select } from '../select/select'
import { TextInput } from '../textInput/textInput'
import { Date as DateInput } from '../date/date'
import { Checkbox } from '../checkbox/checkbox'
import { Switcher } from '../switcher/switcher'
import { File } from '../file/file'
import { FormFields } from '../../../types/formFields'
import { ErrorMsg } from '../../../enums/errors'
import './form.scss'
import { useAppDispatch } from '../../../hooks/hooks'
import { addCard } from '../../../store/formSlice'

interface FormProps {
  onSubmitted: () => void
}

export function Form({ onSubmitted }: FormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormFields>()

  const dispatch = useAppDispatch()

  const onSubmit: SubmitHandler<FormFields> = (cardData) => {
    dispatch(addCard(cardData))
    onSubmitted()
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} data-testid="form">
      <div className="form__container">
        <p className="form__description">
          Become a member of Bougie Family today. It's free to join!
        </p>
        <h1 className="form__client-details">Client details</h1>
        <h6 className="form__requirements">(All fields are required)</h6>
        <Select
          register={register('country', { required: ErrorMsg.COUNTRY })}
          error={errors.country?.message}
        />
        <TextInput
          register={register('name', { required: ErrorMsg.NAME })}
          error={errors.name?.message}
        />
        <DateInput
          register={register('birthdate', { required: ErrorMsg.BIRTHDATE })}
          error={errors.birthdate?.message}
        />
        <Switcher
          register={register('news', { required: ErrorMsg.NEWS })}
          error={errors.news?.message}
        />
        <File
          register={register('files', { required: ErrorMsg.FILE })}
          error={errors.files?.message}
        />
        <Checkbox
          register={register('consent', { required: ErrorMsg.CONSENT })}
          error={errors.consent?.message}
        />
        <button
          className="form__submit-btn"
          type="submit"
          data-testid="btn-submit"
        >
          <span>Submit</span>
        </button>
      </div>
    </form>
  )
}
