import { configureStore } from '@reduxjs/toolkit'
import { bougieApi } from '../api/cardsApi'

export const store = configureStore({
  reducer: {
    [bougieApi.reducerPath]: bougieApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bougieApi.middleware),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
