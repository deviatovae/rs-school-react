import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FormCard } from '../types/formCard'
import { FormFields } from '../types/formFields'

const initialState: FormCard[] = []

export const formSlice = createSlice({
  name: 'formRequest',
  initialState,
  reducers: {
    addCard: (
      state,
      {
        payload: { name, country, birthdate, news, files, consent },
      }: PayloadAction<FormFields>
    ) => {
      if (!files) {
        return state
      }
      const file = files.item(0)
      if (!file) {
        return state
      }

      return [
        ...state,
        {
          id: state.length,
          name,
          birthdate,
          file,
          consent,
          country,
          news,
        },
      ]
    },
  },
})

export const { addCard } = formSlice.actions
