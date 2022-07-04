import { DiscoverStyle } from '../../../../assets/styles/Homepage/styleMain'
import { ContainerSmall } from '../../../../assets/styles/styleUtils'

export default function Discover() {
  return (
    <DiscoverStyle>
      <ContainerSmall>
        <div className="header">
          <h2>Discover</h2>
        </div>
        <div className="grid-container">
          <div className="grid-item hands">
            <ul>
              <li>Discover our plans</li>
              <li>Professional plans</li>
            </ul>
          </div>

          <div className="grid-container-half">
            <div className="grid-item house">
              <ul>
                <li>Want to rent or sell?</li>
                <li>Houses and apartments</li>
              </ul>
            </div>

            <div className="grid-item phone">
              <ul>
                <li>Get rid of your used</li>
                <li>Sell your smartphone</li>
              </ul>
            </div>
          </div>

          <div className="grid-container-half-middle">
            <div className="grid-item videogame">
              <ul>
                <li>Electronics and Smartphones</li>
                <li>Videogames</li>
              </ul>
            </div>

            <div className="grid-item car">
              <ul>
                <li>Auto and parts</li>
                <li>Change car</li>
              </ul>
            </div>
          </div>

          <div className="grid-container-half right">
            <div className="grid-item car-key">
              <ul>
                <li>Financing</li>
                <li>See the opportunities</li>
              </ul>
            </div>

            <div className="grid-item people">
              <ul>
                <li>OLX Pay</li>
                <li>A new way to sell</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid-container media-small">
          <div className="grid-item hands">
            <ul>
              <li>Discover our plans</li>
              <li>Professional plans</li>
            </ul>
          </div>

          <div className="grid-item house">
            <ul>
              <li>Want to sell or rent?</li>
              <li>Houses and apartments</li>
            </ul>
          </div>

          <div className="grid-item phone">
            <ul>
              <li>Get rid of your used</li>
              <li>Sell your smartphone</li>
            </ul>
          </div>

          <div className="grid-item videogame">
            <ul>
              <li>Electronics and smartphones</li>
              <li>Videogames</li>
            </ul>
          </div>

          <div className="grid-item car">
            <ul>
              <li>Auto and parts</li>
              <li>Change car</li>
            </ul>
          </div>

          <div className="grid-item car-key">
            <ul>
              <li>Financing</li>
              <li>See the opportunities</li>
            </ul>
          </div>

          <div className="grid-item people">
            <ul>
              <li>OLX Pay</li>
              <li>A new way to sell</li>
            </ul>
          </div>
        </div>
      </ContainerSmall>
    </DiscoverStyle>
  )
}
