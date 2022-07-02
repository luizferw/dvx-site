import ChooseState from './ChooseState/ChooseState'
import PremiumGallery from './PremiumGallery/PremiumGallery'
import RecentAds from './RecentAds/RecentAds'
import Discover from './Discover/Discover'
import About from './About/About'
import PopularSearch from './PopularSearch/PopularSearch'
import { Container } from '../../../assets/styles/styleUtils'

export default function Main() {
  return (
    <main>
      <Container>
        <RecentAds />
        <PremiumGallery />
      </Container>

      <ChooseState />

      <Container>
        <Discover />
        <About />
        <PopularSearch />
      </Container>
    </main>
  )
}
