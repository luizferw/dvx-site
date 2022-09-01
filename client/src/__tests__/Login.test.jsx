import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from '../App'
import LoginPage from '../pages/LoginPage'
import faker from 'faker'

describe('LoginPage', () => {
  const renderWithContext = () => {
    return render(
      <UserContextProvider>
        <LoginPage />
      </UserContextProvider>,
      { wrapper: BrowserRouter }
    )
  }

  it('should render LoginPage PAGE correctly', () => {
    const { container } = renderWithContext()

    const inputPassword = container.querySelector('input[type="password"]')
    const inputEmail = container.querySelector('input[type="email"]')
    const button = container.querySelector('button[type="submit"]')

    expect(screen.getByText(/access your account/i)).toBeInTheDocument()
    expect(screen.getByText(/e-mail/i)).toBeInTheDocument()
    expect(screen.getByText(/password/i)).toBeInTheDocument()
    expect(screen.getByText(/Login/i)).toBeInTheDocument()
    expect(screen.getByText(/register/i)).toBeInTheDocument()
    expect(inputPassword).toHaveValue('')
    expect(inputEmail).toHaveValue('')
    expect(button).toBeTruthy()
  })

  it('should type an email', async () => {
    const { container } = renderWithContext()

    const inputEmail = container.querySelector('input[type="email"]')
    const mockEmail = faker.internet.email()

    expect(inputEmail).toBeTruthy()
    await userEvent.type(inputEmail, mockEmail)
    expect(inputEmail).toHaveValue(mockEmail)
  })

  it('should type a password', async () => {
    const { container } = renderWithContext()

    const inputPassword = container.querySelector('input[type="password"]')
    const mockPassword = faker.internet.password()

    expect(inputPassword).toBeTruthy()
    await userEvent.type(inputPassword, mockPassword)
    expect(inputPassword).toHaveValue(mockPassword)
  })

  it('should make email error message visible because is empty', async () => {
    const { container } = renderWithContext()

    const button = container.querySelector('button[type="submit"]')

    await userEvent.click(button)
    expect(screen.getByText(/fill out this field/i)).toBeInTheDocument()
  })

  it('should make password error message visible because is empty', async () => {
    const { container } = renderWithContext()

    const inputEmail = container.querySelector('input[type="email"]')
    const button = container.querySelector('button[type="submit"]')
    const mockEmail = faker.internet.email()

    await userEvent.type(inputEmail, mockEmail)
    await userEvent.click(button)

    expect(screen.getByText(/fill out this field/i)).toBeInTheDocument()
  })

  it('should make email error message visible because is invalid', async () => {
    const { container } = renderWithContext()

    const inputEmail = container.querySelector('input[type="email"]')
    const inputPassword = container.querySelector('input[type="password"]')
    const button = container.querySelector('button[type="submit"]')
    const mockEmail = faker.internet.email()
    const mockPassword = faker.internet.password()

    await userEvent.type(inputEmail, mockEmail)
    await userEvent.type(inputPassword, mockPassword)

    await userEvent.click(button)

    setTimeout(() => {
      expect(screen.getByText(/invalid email/i)).toBeInTheDocument()
    }, 100)
  })

  it('should make password visible', async () => {
    const { container } = renderWithContext()

    const button = container.querySelector('svg.relative')

    await userEvent.click(button)

    expect(container.querySelector('input[type="text"]')).toBeTruthy()
  })
})
