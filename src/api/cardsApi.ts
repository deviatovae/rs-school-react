import { API_URL } from '../types/const'
import { Card as CardType } from '../types/card'

export function fetchCards(param?: string) {
  const baseUrl = `${API_URL}/cards`
  const url = param ? `${baseUrl}?q=${param}` : baseUrl
  return fetch(url).then((res) => res.json() as Promise<CardType[]>)
}
export function fetchCard(id: number) {
  return fetch(`${API_URL}/cards/${id}`).then(
    (res) => res.json() as Promise<CardType>
  )
}
