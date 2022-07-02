import { AboutStyle } from '../../../../assets/styles/Homepage/styleMain'
import { ContainerSmall } from '../../../../assets/styles/styleUtils'

export default function About() {
  return (
    <AboutStyle>
      <ContainerSmall>
        <section className="header">
          <h2>About OLX</h2>
        </section>
        <div className="about-grid-container">
          <div className="about-grid-item-container left">
            <div className="about-grid-item-content left">
              <h3>Let's boost your business together?</h3>
              <p>
                Discover OLX's new blog about the car market for you to
                accelerate your business even more.
              </p>
              <button type="text" className="about-btn">
                Access
              </button>
            </div>
            <figure>
              <img src="./src/assets/table-olx.png" />
            </figure>
          </div>

          <div className="about-grid-item-container right">
            <div className="about-grid-item-content right">
              <h3>Boost your business with the Data OLX Autos!</h3>
              <p>
                Stay on top of all the movements in the automotive market in
                Brazil through free data and reports
              </p>
              <button type="text" className="about-btn right">
                Know more
              </button>
            </div>
            <figure>
              <img src="./src/assets/car-olx.png" />
            </figure>
          </div>
        </div>
      </ContainerSmall>
    </AboutStyle>
  )
}
