import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('should render HOME PAGE correctly', () => {
    render(<App />)
    expect(screen.getByText(/recent ads/i)).toBeInTheDocument()
    expect(screen.getByText(/choose your state/i)).toBeInTheDocument()
    expect(screen.getByText(/popular searches/i)).toBeInTheDocument()
    expect(screen.getByAltText(/logo dvx/i)).toBeInTheDocument()
  })
})
