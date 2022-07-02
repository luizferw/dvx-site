import { CategoryMenuStyle } from '../../../assets/styles/Homepage/styleHeader'

export default function CategoryMenu() {
  return (
    <CategoryMenuStyle>
      <div className="category-item">
        <li>
          <span className="material-symbols-outlined"> home </span>
        </li>
        <li>Properties</li>
      </div>
      <div className="category-item">
        <li>
          <span className="material-symbols-outlined">directions_car</span>
        </li>
        <li>Cars and parts</li>
      </div>
      <div className="category-item">
        <li>
          <span className="material-symbols-outlined"> light </span>
        </li>
        <li>To your house</li>
      </div>
      <div className="category-item">
        <li>
          <span className="material-symbols-outlined"> smartphone </span>
        </li>
        <li>Electronics and smartphones</li>
      </div>
      <div className="category-item">
        <li>
          <span className="material-symbols-outlined">assignment_ind</span>
        </li>
        <li>Jobs</li>
      </div>
      <div className="category-item">
        <li>
          <span className="material-symbols-outlined"> format_paint </span>
        </li>
        <li>Services</li>
      </div>
      <div className="category-item">
        <li>
          <span className="material-symbols-outlined"> piano </span>
        </li>
        <li>Music and hobbies</li>
      </div>
      <div className="category-item">
        <li>
          <span className="material-symbols-outlined">sports_basketball</span>
        </li>
        <li>Sports and leisure</li>
      </div>
      <div className="category-item fashion">
        <li>
          <span className="material-symbols-outlined"> checkroom </span>
        </li>
        <li>Fashion and beauty</li>
      </div>
      <div className="category-item agriculture">
        <li>
          <span className="material-symbols-outlined"> agriculture </span>
        </li>
        <li>Agro and industry</li>
      </div>
      <div className="category-item" onClick={e => setSelectCategory(null)}>
        <li>
          <span className="material-symbols-outlined"> category </span>
        </li>
        <li>All categories</li>
      </div>
    </CategoryMenuStyle>
  )
}
