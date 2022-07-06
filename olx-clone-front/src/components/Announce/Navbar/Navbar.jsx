import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { User } from '../../../App'
import { NavBarStyle } from '../../../assets/styles/Announce/styleNavbar'

export default function Navbar() {
  const { userData: user } = useContext(User)
  return (
    <div
      className="white-background"
      style={{ borderBottom: '1px solid #eee' }}
    >
      <NavBarStyle>
        <div className="index">
          <ul className="index-list">
            <li>
              <figure>
                <Link to="/">
                  <img src="../../../../assets/dvx-logo.png" alt="logo olx" />
                </Link>
              </figure>
            </li>
          </ul>

          <ul className="index-list">
            <li>
              <a className="hello" href="#">
                <strong>Olá,</strong> {user && user.username}
              </a>
            </li>
          </ul>
        </div>
      </NavBarStyle>
    </div>
  )
}
