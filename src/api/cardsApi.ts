import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../types/const'
import { Card as CardType } from '../types/card'

export const bougieApi = createApi({
  reducerPath: 'bougieApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}/` }),
  endpoints: (builder) => ({
    getCards: builder.query<CardType[], string>({
      query: (query) => ({
        url: 'cards',
        params: query ? { q: query } : {},
      }),
    }),
    getCard: builder.query<CardType, string>({
      query: (id) => `cards/${id}`,
    }),
  }),
})

export const { useGetCardQuery, useGetCardsQuery } = bougieApi
