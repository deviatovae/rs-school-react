import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = ''

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, { payload }: PayloadAction<string>) => payload,
  },
})

export const { setSearch } = searchSlice.actions
