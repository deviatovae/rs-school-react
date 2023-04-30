import React from 'react'
import user from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { fireEvent, screen, waitFor } from '@testing-library/react'
import { FormPage } from './FormPage'
import { ErrorMsg } from '../enums/errors'
import { renderWithProviders } from '../utils/testUtils'

describe('Forms', () => {
  it('Should contain required inputs and their labels', () => {
    renderWithProviders(<FormPage />)

    expect(screen.getByText('Country')).toBeInTheDocument()
    expect(screen.getByTestId('input-country')).toBeInTheDocument()
    expect(screen.getByText('Name/Surname')).toBeInTheDocument()
    expect(screen.getByTestId('input-name')).toBeInTheDocument()
    expect(screen.getByText('Birthdate')).toBeInTheDocument()
    expect(screen.getByTestId('input-birthdate')).toBeInTheDocument()
    expect(screen.getByText(/news and marketing offers/)).toBeInTheDocument()
    expect(screen.getByTestId('input-news')).toBeInTheDocument()
    expect(screen.getByText('Upload a profile image')).toBeInTheDocument()
    expect(screen.getByTestId('input-file')).toBeInTheDocument()
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
    expect(screen.getByTestId('input-consent')).toBeInTheDocument()
  })

  it('Should display validation error on submitting the form', async () => {
    renderWithProviders(<FormPage />)

    fireEvent.click(screen.getByTestId('btn-submit'))

    const nameError = await screen.findByText(ErrorMsg.NAME)
    expect(nameError).toBeInTheDocument()
    expect(screen.getByText(ErrorMsg.COUNTRY)).toBeInTheDocument()
    expect(screen.getByText(ErrorMsg.BIRTHDATE)).toBeInTheDocument()
    expect(screen.getByText(ErrorMsg.NEWS)).toBeInTheDocument()
    expect(screen.getByText(ErrorMsg.FILE)).toBeInTheDocument()
    expect(screen.getByText(ErrorMsg.CONSENT)).toBeInTheDocument()
  })

  it('Should not display cards if there are validation errors', () => {
    renderWithProviders(<FormPage />)

    fireEvent.click(screen.getByTestId('btn-submit'))

    expect(screen.queryByTestId('form-cards')).toBeNull()
  })

  it('Should render a form card after submitting a valid form', async () => {
    renderWithProviders(<FormPage />)

    const imgSrc = 'image-src'
    const country = 'Canada'
    const name = 'Test Developer'
    const birthdate = '1990-09-20'
    const fileName = 'image.png'
    const file = new File(['binary content'], fileName, {
      type: 'image/png',
    })

    global.URL.createObjectURL = vi.fn(() => imgSrc)

    fireEvent.change(screen.getByTestId('input-country'), {
      target: { value: country },
    })
    fireEvent.change(screen.getByTestId('input-name'), {
      target: { value: name },
    })
    fireEvent.change(screen.getByTestId('input-birthdate'), {
      target: { value: birthdate },
    })
    fireEvent.click(screen.getByTestId('input-news'))

    await user.upload(screen.getByTestId('input-file'), file)

    fireEvent.click(screen.getByTestId('input-consent'))
    fireEvent.click(screen.getByTestId('btn-submit'))

    await waitFor(() => {
      expect(screen.getByTestId('form-card')).toBeInTheDocument()
      expect(screen.getByTestId('form-card-img')).toHaveAttribute('src', imgSrc)
      expect(screen.getByTestId('form-card-name')).toHaveTextContent(name)
      expect(screen.getByTestId('form-card-birthdate')).toHaveTextContent(
        birthdate
      )
      expect(screen.getByTestId('form-card-country')).toHaveTextContent(country)
      expect(screen.getByTestId('form-card-news')).toHaveTextContent(
        'News alert: Yes'
      )
      expect(screen.getByTestId('form-card-consent')).toHaveTextContent(
        'Privacy Policy: Accepted'
      )
      expect(screen.getByTestId('form-card-file-name')).toHaveTextContent(
        `Image: ${fileName}`
      )
    })
  })
})
