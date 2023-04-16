import { configureStore } from '@reduxjs/toolkit'
import { bougieApi } from '../api/cardsApi'
import { searchSlice } from './searchSlice'
import { formSlice } from './formSlice'

export const store = configureStore({
  reducer: {
    [bougieApi.reducerPath]: bougieApi.reducer,
    search: searchSlice.reducer,
    formRequest: formSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(bougieApi.middleware),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
