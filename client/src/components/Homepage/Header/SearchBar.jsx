import { useContext, useState } from 'react'
import { Ads } from '../../../App'
import { SearchBarStyle } from '../../../assets/styles/Homepage/styleHeader'

export default function SearchBar() {
  const [search, setSearch] = useState('')
  const [buttonLoading, setButtonLoading] = useState(false)

  const { setFilterBySearch } = useContext(Ads)

  function handleSearch(e) {
    e.preventDefault()
    setButtonLoading(true)

    setTimeout(() => {
      setButtonLoading(false)
    }, 1500)

    if (search) {
      setFilterBySearch(search)
    }
  }

  return (
    <SearchBarStyle>
      <input
        type="search"
        className="search-input"
        name="search"
        value={search}
        onChange={e => setSearch(e.target.value)}
        autoComplete="off"
        placeholder="I'm looking for..."
      />
      <button
        type="submit"
        onClick={e => handleSearch(e)}
        className={`search-button ${buttonLoading ? 'brightness-90' : null}`}
        disabled={buttonLoading}
      >
        <span className="material-symbols-outlined"> search </span>
      </button>
    </SearchBarStyle>
  )
}
