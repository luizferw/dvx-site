import { ToggleMenuStyle } from '../../../assets/styles/Homepage/styleNavbar'

export default function ToggleMenu() {
  return (
    <ToggleMenuStyle>
      <ul>
        <li className="profile li-item">
          <span className="profile_span">
            <span>{'username'}</span>
            <span className="myacc">My account</span>
          </span>
          <span>
            <svg
              class="sc-gzVnrw VmYOo sc-htoDjs bZzhDu"
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
        </li>

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

          <li className="sell li-item">
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
                  d="M10.25 21.25V14a.75.75 0 01.75-.75h6a.75.75 0 01.75.75v7.25H19c.69 0 1.25-.56 1.25-1.25v-7.5a.75.75 0 111.5 0V20A2.75 2.75 0 0119 22.75H5A2.75 2.75 0 012.25 20v-7.5a.75.75 0 111.5 0V20c0 .69.56 1.25 1.25 1.25h5.25zm1.5 0h4.5v-6.5h-4.5v6.5zM1.584 9.624a.75.75 0 01-.273-.92l3-7A.75.75 0 015 1.25h14c.3 0 .571.179.69.455l3 7a.75.75 0 01-.274.919c-1.118.745-2.26 1.126-3.416 1.126-.784 0-1.237-.165-1.997-.599-.553-.316-.787-.401-1.253-.401-.403 0-.663.077-1.107.298l-.245.123c-.805.402-1.424.579-2.398.579-.974 0-1.593-.177-2.398-.58l-.245-.122c-.444-.22-.704-.298-1.107-.298-.466 0-.7.085-1.253.401-.76.434-1.213.599-1.997.599-1.156 0-2.298-.38-3.416-1.126zM5 9.25c.466 0 .7-.085 1.253-.401.76-.434 1.213-.599 1.997-.599.67 0 1.14.14 1.774.454l.249.125c.612.306 1.014.421 1.727.421.713 0 1.115-.115 1.727-.42.12-.062.196-.1.249-.126.633-.314 1.103-.454 1.774-.454.784 0 1.237.165 1.997.599.553.316.787.401 1.253.401.674 0 1.356-.182 2.053-.555L18.505 2.75H5.495L2.947 8.695c.697.373 1.38.555 2.053.555z"
                ></path>
              </svg>
            </span>
            <span>Sells DVX Pay</span>
          </li>

          <li className="account li-item">
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
                  d="M2.75 7.75V18c0 .69.56 1.25 1.25 1.25h16c.69 0 1.25-.56 1.25-1.25V9c0-.69-.56-1.25-1.25-1.25H2.75zm0-1.5h15.5V6c0-.69-.56-1.25-1.25-1.25H4c-.69 0-1.25.56-1.25 1.25v.25zm17.25 0A2.75 2.75 0 0122.75 9v9A2.75 2.75 0 0120 20.75H4A2.75 2.75 0 011.25 18V6A2.75 2.75 0 014 3.25h13A2.75 2.75 0 0119.75 6v.25H20zm-2 8.25a1 1 0 110-2 1 1 0 010 2z"
                ></path>
              </svg>
            </span>
            <span>Account DVX Pay</span>
          </li>

          <li className="plan li-item">
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
                  d="M7.25 6.25V5A2.75 2.75 0 0110 2.25h4A2.75 2.75 0 0116.75 5v1.25H20A2.75 2.75 0 0122.75 9v10A2.75 2.75 0 0120 21.75H4A2.75 2.75 0 011.25 19V9A2.75 2.75 0 014 6.25h3.25zm1.5 0h6.5V5c0-.69-.56-1.25-1.25-1.25h-4c-.69 0-1.25.56-1.25 1.25v1.25zM4 7.75c-.69 0-1.25.56-1.25 1.25v10c0 .69.56 1.25 1.25 1.25h16c.69 0 1.25-.56 1.25-1.25V9c0-.69-.56-1.25-1.25-1.25H4z"
                ></path>
              </svg>
            </span>
            <span>Profissional plan</span>
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
                  clip-rule="evenodd"
                  d="M8.218 14.976a.999.999 0 01-.436 0A8.67 8.67 0 011 6.499V3.5A2.5 2.5 0 013.5 1h9A2.5 2.5 0 0115 3.5v3a8.669 8.669 0 01-6.782 8.476zM14 6.5v-3A1.5 1.5 0 0012.5 2h-9A1.5 1.5 0 002 3.5v3A7.669 7.669 0 008 14a7.67 7.67 0 006-7.5z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clip-rule="evenodd"
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

        <ul className="config-list">
          <li className="privacy li-item">
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
                  d="M12.335 22.67a.75.75 0 01-.67 0 10.893 10.893 0 01-.372-.197 22.218 22.218 0 01-3.787-2.658C4.86 17.497 3.25 14.882 3.25 12V4a.75.75 0 01.568-.728l8-2a.75.75 0 01.364 0l8 2A.75.75 0 0120.75 4v8c0 2.883-1.61 5.498-4.256 7.814a22.218 22.218 0 01-4.159 2.857zm.518-2.025a20.737 20.737 0 002.653-1.96C17.86 16.628 19.25 14.368 19.25 12V4.586L12 2.773 4.75 4.586V12c0 2.367 1.39 4.627 3.744 6.686A20.737 20.737 0 0012 21.149c.257-.142.544-.31.853-.504z"
                ></path>
              </svg>
            </span>
            <span>Security and privacy</span>
          </li>

          <li className="config li-item">
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
                  d="M19.25 16.75H17a.75.75 0 110-1.5h6a.75.75 0 110 1.5h-2.25V21a.75.75 0 11-1.5 0v-4.25zm-8-9.5V3a.75.75 0 111.5 0v4.25H15a.75.75 0 110 1.5H9a.75.75 0 010-1.5h2.25zm-8 7.5H1a.75.75 0 110-1.5h6a.75.75 0 110 1.5H4.75V21a.75.75 0 11-1.5 0v-6.25zM4.75 10a.75.75 0 11-1.5 0V3a.75.75 0 011.5 0v7zm8 11a.75.75 0 11-1.5 0v-9a.75.75 0 111.5 0v9zm8-9a.75.75 0 11-1.5 0V3a.75.75 0 111.5 0v9z"
                ></path>
              </svg>
            </span>
            <span>Configurations and communications</span>
          </li>

          <li className="manage li-item">
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
                  d="M10.719 12.874h2.552c1.046 0 1.89.824 1.89 1.845 0 1.02-.844 1.845-1.89 1.845H8.678a.907.907 0 00-.914.893c0 .49.412.893.914.893h2.402v1.757c0 .49.412.893.915.893a.907.907 0 00.915-.893V18.35h.371c2.05 0 3.719-1.63 3.719-3.631 0-2.003-1.668-3.632-3.719-3.632H10.73c-1.046 0-1.89-.824-1.89-1.845 0-1.02.844-1.845 1.89-1.845h4.512a.907.907 0 00.915-.893.907.907 0 00-.915-.893H12.92V3.893A.907.907 0 0012.005 3a.907.907 0 00-.915.893v1.728h-.371C8.669 5.62 7 7.25 7 9.25c.01 1.993 1.678 3.623 3.719 3.623z"
                ></path>
              </svg>
            </span>
            <span>Manage payments</span>
          </li>
        </ul>
      </ul>
    </ToggleMenuStyle>
  )
}
