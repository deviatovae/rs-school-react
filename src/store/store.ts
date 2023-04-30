import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit'
import { bougieApi } from '../api/cardsApi'
import { searchSlice } from './searchSlice'
import { formSlice } from './formSlice'

const reducer = combineReducers({
  [bougieApi.reducerPath]: bougieApi.reducer,
  search: searchSlice.reducer,
  formRequest: formSlice.reducer,
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    preloadedState,
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(bougieApi.middleware),
  })
}

export type RootState = ReturnType<typeof reducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
