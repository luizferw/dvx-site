import { useContext } from 'react'
import { Ads } from '../../../App'
import { CategoryMenuStyle } from '../../../assets/styles/Homepage/styleHeader'

export default function CategoryMenu() {
  const { setFilterByCategory } = useContext(Ads)

  function handleClick(e) {
    setFilterByCategory(e.target.innerHTML)
  }

  return (
    <CategoryMenuStyle>
      <div className="category-item">
        <li>
          <span className="material-symbols-outlined"> home </span>
        </li>
        <li onClick={e => handleClick(e)}>Properties</li>
      </div>
      <div className="category-item">
        <li>
          <span className="material-symbols-outlined">directions_car</span>
        </li>
        <li onClick={e => handleClick(e)}>Cars and parts</li>
      </div>
      <div className="category-item">
        <li>
          <span className="material-symbols-outlined"> light </span>
        </li>
        <li onClick={e => handleClick(e)}>To your house</li>
      </div>
      <div className="category-item">
        <li>
          <span className="material-symbols-outlined"> smartphone </span>
        </li>
        <li onClick={e => handleClick(e)}>Electronics and smartphones</li>
      </div>
      <div className="category-item">
        <li>
          <span className="material-symbols-outlined">assignment_ind</span>
        </li>
        <li onClick={e => handleClick(e)}>Jobs</li>
      </div>
      <div className="category-item">
        <li>
          <span className="material-symbols-outlined"> format_paint </span>
        </li>
        <li onClick={e => handleClick(e)}>Services</li>
      </div>
      <div className="category-item">
        <li>
          <span className="material-symbols-outlined"> piano </span>
        </li>
        <li onClick={e => handleClick(e)}>Music and hobbies</li>
      </div>
      <div className="category-item">
        <li>
          <span className="material-symbols-outlined">sports_basketball</span>
        </li>
        <li onClick={e => handleClick(e)}>Sports and leisure</li>
      </div>
      <div className="category-item fashion">
        <li>
          <span className="material-symbols-outlined"> checkroom </span>
        </li>
        <li onClick={e => handleClick(e)}>Fashion and beauty</li>
      </div>
      <div className="category-item agriculture">
        <li>
          <span className="material-symbols-outlined"> agriculture </span>
        </li>
        <li onClick={e => handleClick(e)}>Agro and industry</li>
      </div>
      <div className="category-item" onClick={() => setFilterByCategory(null)}>
        <li>
          <span className="material-symbols-outlined"> category </span>
        </li>
        <li>All categories</li>
      </div>
    </CategoryMenuStyle>
  )
}
