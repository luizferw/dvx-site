import { FooterStyle } from '../../../assets/styles/Homepage/styleFooter'

export default function Footer() {
  return (
    <FooterStyle>
      <div className="header">
        <ul className="olx-links">
          <li>
            <a href="#">
              <h4>Help and Contact</h4>
            </a>
          </li>
          <li>
            <a href="#">
              <h4>Safety tips</h4>
            </a>
          </li>
          <li>
            <a href="#">
              <h4>Sell on OLX</h4>
            </a>
          </li>
          <li>
            <a href="#">
              <h4>Pro Plan</h4>
            </a>
          </li>
        </ul>
        <ul className="social-links">
          <li>
            <a href="#">
              <svg width="24" height="24" className="fb-icon">
                <path
                  d="M9.21567432,23 L9.21567432,12.4986746 L7,12.4986746 L7,8.88027013 L9.21567432,8.88027013 L9.21567432,6.70790204 C9.21567432,3.75618531 10.4660977,2 14.0209307,2 L16.9796789,2 L16.9796789,5.61972987 L15.1304613,5.61972987 C13.7465962,5.61972987 13.6551514,6.12537869 13.6551514,7.06907978 L13.6490551,8.88027013 L17,8.88027013 L16.6078033,12.4986746 L13.6490551,12.4986746 L13.6490551,23 L9.21567432,23 Z"
                  className="socialIcon"
                  viewBox="0 0 24 24"
                ></path>
              </svg>
            </a>
          </li>

          <li>
            <a href="#">
              <svg width="24" height="24" className="yt-icon">
                <path
                  d="M21,15.6037999 L21,9.12347286 C21,9.12347286 21,6 17.898048,6 L6.1008937,6 C6.1008937,6 3,6 3,9.12347286 L3,15.6037999 C3,15.6037999 3,18.7272727 6.1008937,18.7272727 L17.898048,18.7272727 C17.898048,18.7272727 21,18.7272727 21,15.6037999 M15.4945908,12.3726945 L9.60183443,15.8574288 L9.60183443,8.88689457 L15.4945908,12.3726945"
                  className="socialIcon"
                  viewBox="0 0 24 24"
                ></path>
              </svg>
            </a>
          </li>

          <li>
            <a href="#">
              <svg width="24" height="24" className="lkn-icon">
                <path
                  d="M3.45402164,8.77180177 L6.96237065,8.77180177 L6.96237065,20.9988475 L3.45402164,20.9988475 L3.45402164,8.77180177 Z M5.11876764,7.2424126 L5.09336783,7.2424126 C3.82337723,7.2424126 3,6.30772186 3,5.12408759 C3,3.91625048 3.84771872,3 5.14310913,3 C6.4374412,3 7.23330198,3.91394545 7.25870179,5.12063004 C7.25870179,6.30426431 6.4374412,7.2424126 5.11876764,7.2424126 L5.11876764,7.2424126 Z M21,21 L17.0217545,21 L17.0217545,14.6715328 C17.0217545,13.0153669 16.3994591,11.8859009 15.0310442,11.8859009 C13.9843603,11.8859009 13.4022813,12.6477142 13.13135,13.3841721 C13.0297507,13.6469458 13.0456256,14.0145985 13.0456256,14.3834038 L13.0456256,21 L9.10442145,21 C9.10442145,21 9.15522107,9.7906262 9.10442145,8.77180177 L13.0456256,8.77180177 L13.0456256,10.6907415 C13.2784572,9.85170957 14.5378645,8.6542451 16.5476246,8.6542451 C19.0410395,8.6542451 21,10.4141375 21,14.2001537 L21,21 L21,21 Z"
                  className="socialIcon"
                  viewBox="0 0 24 24"
                ></path>
              </svg>
            </a>
          </li>

          <li>
            <a href="#">
              <svg width="24" height="24" className="ig-icon">
                <path
                  d="M11.9999802,2 C14.7158369,2 15.0563809,2.01151157 16.1229475,2.06017771 C17.1873706,2.10876447 17.9142666,2.27778605 18.55038,2.5250069 C19.2079684,2.78056371 19.7656443,3.12249698 20.3215737,3.67842633 C20.877503,4.23435568 21.2194363,4.79203161 21.4749931,5.44962002 C21.722214,6.0857334 21.8912355,6.81262938 21.9398223,7.87705248 C21.9884884,8.94361912 22,9.28416306 22,12.0000198 C22,14.7158766 21.9884884,15.0564206 21.9398223,16.1229872 C21.8912355,17.1874103 21.722214,17.9143063 21.4749931,18.5504197 C21.2194363,19.2080081 20.877503,19.765684 20.3215737,20.3216134 C19.7656443,20.8775427 19.2079684,21.219476 18.55038,21.4750328 C17.9142666,21.7222536 17.1873706,21.8912752 16.1229475,21.939862 C15.0563809,21.9885281 14.7158369,22 11.9999802,22 C9.28412336,22 8.94361912,21.9885281 7.87701279,21.939862 C6.81258969,21.8912752 6.0856937,21.7222536 5.44958032,21.4750328 C4.79199192,21.219476 4.23431598,20.8775427 3.67838663,20.3216134 C3.12245728,19.765684 2.78052401,19.2079684 2.5249672,18.5504197 C2.27774635,17.9143063 2.10872478,17.1874103 2.06013802,16.1229872 C2.01147187,15.0564206 2,14.7158766 2,12.0000198 C2,9.28416306 2.01147187,8.94361912 2.06013802,7.87705248 C2.10872478,6.81262938 2.27774635,6.0857334 2.5249672,5.44962002 C2.78052401,4.79203161 3.12245728,4.23435568 3.67838663,3.67842633 C4.23431598,3.12249698 4.79199192,2.78056371 5.44958032,2.5250069 C6.0856937,2.27778605 6.81258969,2.10876447 7.87701279,2.06017771 C8.94361912,2.01151157 9.28412336,2 11.9999802,2 Z M11.9999802,3.80183828 C9.32985208,3.80183828 9.01360151,3.81200021 7.95910218,3.86011063 C6.98415175,3.9046088 6.45465931,4.06751733 6.10228624,4.2044256 C5.635512,4.38583204 5.30235134,4.60256708 4.95243936,4.95247906 C4.60252738,5.30239103 4.38579234,5.63555169 4.2044256,6.10228624 C4.06747764,6.454699 3.9045691,6.98419144 3.86007094,7.95918157 C3.81196052,9.01364121 3.80179858,9.32989177 3.80179858,12.0000198 C3.80179858,14.6701479 3.81196052,14.9863985 3.86007094,16.0408978 C3.9045691,17.0158483 4.06747764,17.5453407 4.2044256,17.8977535 C4.38579234,18.364488 4.60252738,18.6976487 4.95243936,19.0475606 C5.30235134,19.3974726 5.635512,19.6142077 6.10228624,19.7955744 C6.45465931,19.9325224 6.98415175,20.0954309 7.95914187,20.1399291 C9.01344273,20.1880395 9.3296933,20.1982014 11.9999802,20.1982014 C14.670267,20.1982014 14.9865176,20.1880395 16.0408184,20.1399291 C17.0158086,20.0954309 17.545301,19.9325224 17.8977138,19.7955744 C18.3644483,19.6142077 18.697609,19.3974726 19.0475209,19.0475606 C19.3974329,18.6976487 19.614168,18.364488 19.7955347,17.8977535 C19.9324827,17.5453407 20.0953912,17.0158483 20.1398894,16.0408581 C20.1879998,14.9863985 20.1981617,14.6701479 20.1981617,12.0000198 C20.1981617,9.32989177 20.1879998,9.01364121 20.1398894,7.95914187 C20.0953912,6.98419144 19.9324827,6.454699 19.7955347,6.10228624 C19.614168,5.63555169 19.3974329,5.30239103 19.0475209,4.95247906 C18.697609,4.60256708 18.3644483,4.38583204 17.8977138,4.2044256 C17.545301,4.06751733 17.0158086,3.9046088 16.0408184,3.86011063 C14.9863588,3.81200021 14.6701082,3.80183828 11.9999802,3.80183828 Z M12.0198413,6.88095238 C14.8579587,6.88095238 17.1587302,9.18172388 17.1587302,12.0198413 C17.1587302,14.8579587 14.8579587,17.1587302 12.0198413,17.1587302 C9.18172388,17.1587302 6.88095238,14.8579587 6.88095238,12.0198413 C6.88095238,9.18172388 9.18172388,6.88095238 12.0198413,6.88095238 Z M12.0198413,15.3556203 C13.8621189,15.3556203 15.3556203,13.8621189 15.3556203,12.0198413 C15.3556203,10.1775636 13.8621189,8.68406223 12.0198413,8.68406223 C10.1775636,8.68406223 8.68406223,10.1775636 8.68406223,12.0198413 C8.68406223,13.8621189 10.1775636,15.3556203 12.0198413,15.3556203 Z M18.5079365,6.64283745 C18.5079365,7.30032544 17.974968,7.83333333 17.31748,7.83333333 C16.659992,7.83333333 16.1269841,7.30032544 16.1269841,6.64283745 C16.1269841,5.98534947 16.659992,5.45238095 17.31748,5.45238095 C17.974968,5.45238095 18.5079365,5.98534947 18.5079365,6.64283745 Z"
                  className="socialIcon"
                  viewBox="0 0 24 24"
                ></path>
              </svg>
            </a>
          </li>

          <li>
            <a href="#">
              <svg width="24" height="24" className="tw-icon">
                <path
                  d="M19.7617538,6.52953922 C20.5669425,6.03033367 21.1847743,5.23876932 21.4747315,4.29582551 C20.7208429,4.75920844 19.8877737,5.09432327 18.9989435,5.27574751 C18.2896637,4.489961 17.2759289,4 16.1540177,4 C14.0016435,4 12.2574397,5.80846454 12.2574397,8.03871154 C12.2574397,8.35533728 12.2897811,8.66387404 12.3566943,8.95854398 C9.11809591,8.789831 6.24640488,7.18359093 4.3226507,4.7384082 C3.98696954,5.33699263 3.79515173,6.03033367 3.79515173,6.76989744 C3.79515173,8.17044634 4.48324235,9.40690452 5.52931854,10.1326015 C4.89029759,10.1118012 4.28919411,9.92806587 3.76281035,9.62761808 L3.76281035,9.67730753 C3.76281035,11.6348404 5.10553501,13.2676585 6.89100194,13.6374404 C6.56312731,13.732197 6.21963961,13.7795753 5.86276927,13.7795753 C5.61184481,13.7795753 5.36649645,13.7553084 5.13006985,13.7079301 C5.62522745,15.311859 7.06497623,16.4812942 8.77126255,16.5124946 C7.43634443,17.5964177 5.75570816,18.2412249 3.93009333,18.2412249 C3.61560134,18.2412249 3.30445501,18.2238914 3,18.1857576 C4.72524505,19.3309259 6.77390386,20 8.97534777,20 C16.1462112,20 20.0650936,13.8454427 20.0650936,8.50787231 C20.0650936,8.33222591 20.0628632,8.15773509 20.0550566,7.9855554 C20.8167518,7.41586018 21.4791923,6.70403004 22,5.8939766 C21.3007572,6.21522461 20.549099,6.43247147 19.7617538,6.52953922 Z"
                  className="socialIcon"
                  viewBox="0 0 24 24"
                ></path>
              </svg>
            </a>
          </li>
        </ul>{' '}
      </div>
      <div className="footer">
        <div className="disclaimer">
          <a href="#">About OLX</a>, <a href="#">Terms of Use</a>,{' '}
          <a href="#">Privacy Police </a>and{' '}
          <a href="#">Intelectual Property Protection</a>
        </div>
        <div className="address">
          <span>
            © Bom Negócio Atividades de Internet Ltda. Rua do Catete, 359,
            Flamengo - 22220-001 - Rio de Janeiro, RJ
          </span>
        </div>{' '}
      </div>
    </FooterStyle>
  )
}
