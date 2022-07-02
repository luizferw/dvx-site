import { SearchBarStyle } from '../../../assets/styles/Homepage/styleHeader'

export default function SearchBar() {
  return (
    <SearchBarStyle>
      <input
        type="search"
        className="search-input"
        name="search"
        autoComplete="off"
        placeholder="I'm looking for..."
      />
      <button type="submit" className="search-button">
        <span className="material-symbols-outlined"> search </span>
      </button>
    </SearchBarStyle>
  )
}
