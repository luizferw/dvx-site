import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { User } from '../../../App'
import { ToggleMenuStyle } from '../../../assets/styles/Homepage/styleNavbar'

export default function ToggleMenu({ toggle }) {
  const { setUserData, setLogged, userData } = useContext(User)

  function handleExit() {
    setLogged(false)
    setUserData(null)
  }

  return (
    <ToggleMenuStyle left={toggle ? '0' : '-50rem'}>
      <ul>
        <Link to={userData ? '/' : '/login'} className="profile li-item">
          <span className="profile_span">
            {userData && userData.username ? (
              <div>
                <span className="block text-left">
                  {userData && userData.username ? userData.username : ''}
                </span>
                <div className="flex gap-7">
                  <span className="myacc">My account</span>
                  <span className="myacc" onClick={handleExit}>
                    Logout
                  </span>
                </div>
              </div>
            ) : (
              <span className="myacc">Sign in</span>
            )}
          </span>
          <span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#a4a4a4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 6 15 12 9 18"></polyline>
            </svg>{' '}
          </span>
        </Link>

        <ul className="search-list">
          <li className="search li-item">
            <span>
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                size="24"
                color="currentColor"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M16.84 15.78l4.69 4.69a.75.75 0 01-1.06 1.06l-4.69-4.69a8.25 8.25 0 111.06-1.06zm-1.51-.564a6.75 6.75 0 10-.113.113.759.759 0 01.112-.113z"
                ></path>
              </svg>
            </span>
            <span>Search</span>
          </li>
        </ul>

        <ul className="notifications_chat-list">
          <li className="notifications li-item">
            <span>
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                size="24"
                color="currentColor"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M22 17.75H2c-1 0-1-1.5 0-1.5A2.25 2.25 0 004.25 14V9a7.75 7.75 0 0115.5 0v5A2.25 2.25 0 0022 16.25c1 0 1 1.5 0 1.5zM18.25 14V9a6.25 6.25 0 00-12.5 0v5c0 .844-.279 1.623-.75 2.25h14a3.733 3.733 0 01-.75-2.25zm-3.871 7.376a2.75 2.75 0 01-4.758 0 .75.75 0 01.649-1.126h3.46a.75.75 0 01.649 1.126z"
                ></path>
              </svg>
            </span>
            <span>Notifications</span>
          </li>

          <li className="chat li-item">
            <span>
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                size="24"
                color="currentColor"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M20.77 15.635a9.25 9.25 0 01-8.268 5.115 9.13 9.13 0 01-3.854-.842l-5.41 1.804a.75.75 0 01-.95-.95l1.804-5.41A9.128 9.128 0 013.25 11.5a9.249 9.249 0 015.112-8.27 9.128 9.128 0 014.138-.98l.541.001c4.698.26 8.449 4.01 8.709 8.749v.5a9.127 9.127 0 01-.98 4.135zM8.464 18.39a.75.75 0 01.575.042 7.632 7.632 0 003.462.819 7.751 7.751 0 006.93-4.288 7.63 7.63 0 00.82-3.46l.001-.46C20.034 7.106 16.893 3.965 13 3.75h-.502a7.634 7.634 0 00-3.463.82 7.75 7.75 0 00-4.285 6.932 7.63 7.63 0 00.82 3.46.75.75 0 01.042.575l-1.426 4.277 4.277-1.425z"
                ></path>
              </svg>
            </span>
            <span>Chat</span>
          </li>
        </ul>

        <ul className="public-list">
          <li className="my_ads li-item">
            <span>
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                size="24"
                color="currentColor"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M3 2.25h7a.75.75 0 01.75.75v7a.75.75 0 01-.75.75H3a.75.75 0 01-.75-.75V3A.75.75 0 013 2.25zm.75 7h5.5v-5.5h-5.5v5.5zm10.25-7h7a.75.75 0 01.75.75v7a.75.75 0 01-.75.75h-7a.75.75 0 01-.75-.75V3a.75.75 0 01.75-.75zm.75 7h5.5v-5.5h-5.5v5.5zm-.75 4h7a.75.75 0 01.75.75v7a.75.75 0 01-.75.75h-7a.75.75 0 01-.75-.75v-7a.75.75 0 01.75-.75zm.75 7h5.5v-5.5h-5.5v5.5zM3 13.25h7a.75.75 0 01.75.75v7a.75.75 0 01-.75.75H3a.75.75 0 01-.75-.75v-7a.75.75 0 01.75-.75zm.75 7h5.5v-5.5h-5.5v5.5z"
                ></path>
              </svg>
            </span>
            <span>My Ads</span>
          </li>

          <li className="public_profile li-item">
            <span>
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                size="24"
                color="currentColor"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M14.449 17.792l-5.652-3.294a3.75 3.75 0 110-4.997l5.65-3.298a3.75 3.75 0 11.756 1.295l-5.65 3.299c.128.377.197.782.197 1.203 0 .42-.07.825-.197 1.203l5.654 3.295a3.75 3.75 0 11-.758 1.294zm1.555.17a2.25 2.25 0 10.113-.192.756.756 0 01-.113.191zm-8.034-7.05a.761.761 0 01-.052-.09 2.25 2.25 0 10.052.089zm8.06-4.824a.761.761 0 01.052.09 2.25 2.25 0 10-.052-.089z"
                ></path>
              </svg>
            </span>
            <span>My public profile</span>
          </li>
        </ul>

        <ul className="security_favorite-list">
          <li className="security li-item">
            <span>
              <svg
                viewBox="0 0 16 16"
                fill="none"
                width="24"
                height="24"
                size="24"
                color="currentColor"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.218 14.976a.999.999 0 01-.436 0A8.67 8.67 0 011 6.499V3.5A2.5 2.5 0 013.5 1h9A2.5 2.5 0 0115 3.5v3a8.669 8.669 0 01-6.782 8.476zM14 6.5v-3A1.5 1.5 0 0012.5 2h-9A1.5 1.5 0 002 3.5v3A7.669 7.669 0 008 14a7.67 7.67 0 006-7.5z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.969 3.3a.571.571 0 01.434.682l-.107.488a2.818 2.818 0 01.613.307c.246.163.24.506.03.714-.224.221-.59.196-.87.05l-.02-.01a1.355 1.355 0 00-.623-.144c-.252 0-.477.07-.675.209a.643.643 0 00-.296.55c0 .113.042.219.126.318.087.098.2.189.336.27.136.081.286.166.448.253.166.084.33.183.493.296.165.11.316.234.453.37a1.657 1.657 0 01.462 1.168c0 .359-.1.686-.3.982a2.017 2.017 0 01-.803.69 2.4 2.4 0 01-.752.225l-.114.518a.571.571 0 11-1.116-.246l.077-.353c-.16-.043-.315-.1-.465-.171a3.123 3.123 0 01-.615-.389c-.23-.187-.208-.53.01-.73.235-.214.603-.178.864.005a1.655 1.655 0 001.01.32c.159 0 .314-.03.465-.091a.995.995 0 00.392-.292.71.71 0 00.162-.458.689.689 0 00-.131-.41 1.17 1.17 0 00-.331-.322 5.34 5.34 0 00-.453-.266 9.65 9.65 0 01-.493-.284 3.156 3.156 0 01-.453-.335 1.428 1.428 0 01-.335-.458 1.484 1.484 0 01-.126-.62c0-.345.094-.658.283-.937.189-.279.444-.495.767-.65.259-.126.54-.201.842-.226l.13-.587a.571.571 0 01.68-.435z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            <span>Security purchase</span>
          </li>

          <li className="favorite li-item">
            <span>
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                size="24"
                color="currentColor"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M20.141 11.92A4.637 4.637 0 0016.861 4c-1.23 0-2.41.489-3.28 1.36l-.52.52a1.5 1.5 0 01-2.122 0l-.52-.52a4.639 4.639 0 00-6.56 6.56l8.14 8.14 8.142-8.14zM12 4.818l.52-.52A6.14 6.14 0 1121.2 12.98l-8.68 8.681a.737.737 0 01-1.042 0l-8.681-8.68a6.139 6.139 0 018.682-8.682l.52.52z"
                ></path>
              </svg>
            </span>
            <span>Favorites</span>
          </li>
        </ul>
      </ul>
    </ToggleMenuStyle>
  )
}
