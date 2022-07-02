import { CategoryContainerSpecificationStyle } from '../../../assets/styles/Announce/styleForm'
import CategoryItemSpecification from './CategoryItemSpecification'

export default function CategoryContainerSpecification({ category }) {
  return (
    <CategoryContainerSpecificationStyle>
      <CategoryItemSpecification category={category} />
    </CategoryContainerSpecificationStyle>
  )
}
