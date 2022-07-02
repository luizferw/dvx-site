import CategoryMenu from './CategoryMenu'
import SearchBar from './SearchBar'
import { HeaderStyle } from '../../../assets/styles/Homepage/styleHeader'
import { Container } from '../../../assets/styles/styleUtils'

export default function Header() {
  return (
    <HeaderStyle>
      <Container>
        <div>
          <SearchBar />
          <CategoryMenu />
        </div>
      </Container>
    </HeaderStyle>
  )
}
