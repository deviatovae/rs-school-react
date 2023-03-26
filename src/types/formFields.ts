export type FormFields = {
  id: number
  country: string
  name: string
  birthdate: string
  newsYes: boolean
  newsNo: boolean
  consent: boolean
  file: File
}

export type FormErrors = {
  country?: string
  name?: string
  birthdate?: string
  news?: string
  file?: string
  consent?: string
}
