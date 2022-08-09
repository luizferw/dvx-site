import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from '../src/App'
import LoginPage from '../src/pages/LoginPage'

describe('LoginPage', () => {
  it('should render LoginPage PAGE correctly', () => {
    const { container } = render(
      <UserContextProvider>
        <LoginPage />
      </UserContextProvider>,
      { wrapper: BrowserRouter }
    )

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
    const { container } = render(
      <UserContextProvider>
        <LoginPage />
      </UserContextProvider>,
      { wrapper: BrowserRouter }
    )

    const inputEmail = container.querySelector('input[type="email"]')

    expect(inputEmail).toBeTruthy()
    await userEvent.type(inputEmail, 'email@email.com')
    expect(inputEmail).toHaveValue('email@email.com')
  })

  it('should type a password', async () => {
    const { container } = render(
      <UserContextProvider>
        <LoginPage />
      </UserContextProvider>,
      { wrapper: BrowserRouter }
    )

    const inputPassword = container.querySelector('input[type="password"]')

    expect(inputPassword).toBeTruthy()
    await userEvent.type(inputPassword, 'f1ga@1!*f@$')
    expect(inputPassword).toHaveValue('f1ga@1!*f@$')
  })

  it('should make email error message visible because is empty', async () => {
    const { container } = render(
      <UserContextProvider>
        <LoginPage />
      </UserContextProvider>,
      { wrapper: BrowserRouter }
    )

    const button = container.querySelector('button[type="submit"]')

    await userEvent.click(button)
    expect(screen.getByText(/fill out this field/i)).toBeInTheDocument()
  })

  it('should make password error message visible because is empty', async () => {
    const { container } = render(
      <UserContextProvider>
        <LoginPage />
      </UserContextProvider>,
      { wrapper: BrowserRouter }
    )

    const inputEmail = container.querySelector('input[type="email"]')
    const button = container.querySelector('button[type="submit"]')

    await userEvent.type(inputEmail, 'email@email.com')
    await userEvent.click(button)

    expect(screen.getByText(/fill out this field/i)).toBeInTheDocument()
  })

  it('should make email error message visible because is invalid', async () => {
    const { container } = render(
      <UserContextProvider>
        <LoginPage />
      </UserContextProvider>,
      { wrapper: BrowserRouter }
    )

    const inputEmail = container.querySelector('input[type="email"]')
    const inputPassword = container.querySelector('input[type="password"]')
    const button = container.querySelector('button[type="submit"]')

    await userEvent.type(inputEmail, 'email@email.com')
    await userEvent.type(inputPassword, 'f1ga@1!*f@$')

    await userEvent.click(button)

    setTimeout(() => {
      expect(screen.getByText(/invalid email/i)).toBeInTheDocument()
    }, 100)
  })

  it('should make password visible', async () => {
    const { container } = render(
      <UserContextProvider>
        <LoginPage />
      </UserContextProvider>,
      { wrapper: BrowserRouter }
    )

    const button = container.querySelector('svg.relative')

    await userEvent.click(button)

    expect(container.querySelector('input[type="text"]')).toBeTruthy()
  })
})
