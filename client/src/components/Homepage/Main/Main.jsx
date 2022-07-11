import ChooseState from './ChooseState/ChooseState'
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
