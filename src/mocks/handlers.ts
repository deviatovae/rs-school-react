import { rest } from 'msw'
import { cards } from './cards'
import { API_URL } from '../types/const'

export const handlers = [
  rest.get(`${API_URL}/cards`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(cards))
  }),
  rest.get(`${API_URL}/cards/:id`, (req, res, ctx) => {
    const card = cards.find(({ id }) => id.toString() === req.params.id)

    return res(ctx.status(card ? 200 : 404), ctx.json(card))
  }),
]
