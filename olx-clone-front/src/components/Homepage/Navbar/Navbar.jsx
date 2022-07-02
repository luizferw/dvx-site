import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { User } from '../../../App'
import { NavBarStyle } from '../../../assets/styles/Homepage/styleNavbar'

export default function Navbar() {
  const { setLogged, userData, setUserData } = useContext(User)

  function handleExit() {
    setLogged(false)
    setUserData(null)
  }

  return (
    <div
      className="white-background"
      style={{ borderBottom: '1px solid #eee' }}
    >
      <NavBarStyle>
        <div className="index">
          <ul className="index-list left">
            <li>
              <figure>
                <Link to="/">
                  <img src="/src/assets/olx-logo.png" alt="logo olx" />
                </Link>
              </figure>
            </li>
            <li className="searchbutton">
              <a href="#">Search</a>
            </li>
          </ul>

          <ul className="index-list right">
            <li className="myads">
              <a href="#">
                <span className="material-symbols-outlined"> grid_view </span>
                My Ads
              </a>
            </li>
            <li className="li_chat">
              <a href="#">
                <span className="material-symbols-outlined chat_icon">
                  mode_comment
                </span>
                <span className="chat">Chat</span>
              </a>
            </li>
            <li className="notifications">
              <a className="a-ring" href="#">
                <span
                  className="material-symbols-outlined notificationicon"
                  style={{ boxShadow: 'none' }}
                >
                  notifications
                </span>
                Notifications
              </a>
            </li>
            <li className="a-person">
              <Link
                to={!userData ? '/login' : '/'}
                onClick={!userData ? null : handleExit}
              >
                <span className="material-symbols-outlined person">person</span>
                {userData ? 'Exit' : 'Enter'}
              </Link>
            </li>
            <li>
              <a className="button" href="/announce">
                Announce
              </a>
            </li>
          </ul>
        </div>
      </NavBarStyle>
    </div>
  )
}
