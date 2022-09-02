import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from '../App'
import LoginPage from '../pages/LoginPage'
import faker from 'faker'
import mockAxios from '../__mocks__/axios'
import factory from '../__mocks__/factory'

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

  it('should make password visible', async () => {
    const { container } = renderWithContext()

    const button = container.querySelector('svg.relative')

    await userEvent.click(button)

    expect(container.querySelector('input[type="text"]')).toBeTruthy()
  })

  it('should type an email', async () => {
    const { container } = renderWithContext()

    const inputEmail = container.querySelector('input[type="email"]')
    const mockEmail = faker.internet.email()

    await userEvent.type(inputEmail, mockEmail)

    expect(inputEmail).toHaveValue(mockEmail)
  })

  it('should type a password', async () => {
    const { container } = renderWithContext()

    const inputPassword = container.querySelector('input[type="password"]')
    const mockPassword = faker.internet.password()

    await userEvent.type(inputPassword, mockPassword)

    expect(inputPassword).toHaveValue(mockPassword)
  })

  it('should make email error message because is empty', async () => {
    const { container } = renderWithContext()

    const button = container.querySelector('button[type="submit"]')

    await userEvent.click(button)
    expect(screen.getByText(/fill out this field/i)).toBeInTheDocument()
  })

  it('should make password error message because is empty', async () => {
    const { container } = renderWithContext()

    const inputEmail = container.querySelector('input[type="email"]')
    const button = container.querySelector('button[type="submit"]')
    const mockEmail = faker.internet.email()

    await userEvent.type(inputEmail, mockEmail)
    await userEvent.click(button)

    expect(screen.getByText(/fill out this field/i)).toBeInTheDocument()
  })

  it('should make email error message because is invalid', async () => {
    const { container } = renderWithContext()

    mockAxios.onGet('/users').reply(200, factory.makeUsers())

    const inputEmail = container.querySelector('input[type="email"]')
    const inputPassword = container.querySelector('input[type="password"]')
    const button = container.querySelector('button[type="submit"]')
    const mockEmail = faker.internet.email()
    const mockPassword = faker.internet.password()

    await userEvent.type(inputEmail, mockEmail)
    await userEvent.type(inputPassword, mockPassword)

    await userEvent.click(button)

    expect(screen.getByText(/invalid email/i)).toBeInTheDocument()
  })

  it('should make password error message because is invalid', async () => {
    const { container } = renderWithContext()
    const mockEmail = faker.internet.email()

    mockAxios
      .onGet('/users')
      .reply(200, factory.makeUsers({ email: mockEmail }))

    const inputEmail = container.querySelector('input[type="email"]')
    const inputPassword = container.querySelector('input[type="password"]')
    const button = container.querySelector('button[type="submit"]')
    const mockPassword = faker.internet.password()

    await userEvent.type(inputEmail, mockEmail)
    await userEvent.type(inputPassword, mockPassword)

    await userEvent.click(button)

    expect(screen.getByText(/invalid password/i)).toBeInTheDocument()
  })

  it('should login a user', async () => {
    const { container } = renderWithContext()
    const mockEmail = faker.internet.email()
    const mockPassword = faker.internet.password()

    mockAxios
      .onGet('/users')
      .reply(
        200,
        factory.makeUsers({ email: mockEmail, password: mockPassword })
      )

    const inputEmail = container.querySelector('input[type="email"]')
    const inputPassword = container.querySelector('input[type="password"]')
    const button = container.querySelector('button[type="submit"]')

    await userEvent.type(inputEmail, mockEmail)
    await userEvent.type(inputPassword, mockPassword)
    await userEvent.click(button)

    expect(screen.queryByText(/invalid password/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/invalid email/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/fill out this field/i)).not.toBeInTheDocument()
  })
})
