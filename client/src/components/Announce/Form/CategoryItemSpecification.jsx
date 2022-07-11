import { useContext, useState } from 'react'
import { CategoryItemStyle } from '../../../assets/styles/Announce/styleForm'
import { CategoryContext } from './Form'

export default function CategoryItemSpecification() {
  const [activeSpecific, setActiveSpecific] = useState(null)
  const { setCategory, active } = useContext(CategoryContext)

  if (
    active === 'Jobs' ||
    active === 'Services' ||
    active === "Children's articles"
  ) {
    try {
      setCategory(active)
    } catch {
      window.location.reload()
    }
  }

  if (active === 'Properties') {
    function handleClickApart() {
      setActiveSpecific('apartments')

      try {
        setCategory('Apartments')
      } catch {
        window.location.reload()
      }
    }

    function handleClickHouse() {
      try {
        setCategory('Houses')
      } catch {
        window.location.reload()
      }

      setActiveSpecific('house')
    }

    function handleClickRoom() {
      try {
        setCategory('Room Rental')
      } catch {
        window.location.reload()
      }

      setActiveSpecific('room')
    }

    function handleClickSeason() {
      try {
        setCategory('Season')
      } catch {
        window.location.reload()
      }

      setActiveSpecific('season')
    }

    function handleClickFarm() {
      try {
        setCategory('Farms')
      } catch {
        window.location.reload()
      }

      setActiveSpecific('farm')
    }

    function handleClickCommerce() {
      try {
        setCategory('Commerce and industry')
      } catch {
        window.location.reload()
      }

      setActiveSpecific('commerce')
    }

    return (
      <div>
        <CategoryItemStyle
          onClick={() => handleClickApart()}
          className={activeSpecific == 'apartments' ? 'active' : null}
          style={{ borderTop: '1px solid #c7c7c7' }}
        >
          Apartments
          {activeSpecific == 'apartments' ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
              <path
                d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          ) : null}
        </CategoryItemStyle>

        <CategoryItemStyle
          onClick={() => handleClickHouse()}
          className={activeSpecific == 'house' ? 'active' : null}
          style={{ borderTop: '1px solid #c7c7c7' }}
        >
          Houses
          {activeSpecific == 'house' ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
              <path
                d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          ) : null}
        </CategoryItemStyle>

        <CategoryItemStyle
          onClick={() => handleClickRoom()}
          className={activeSpecific == 'room' ? 'active' : null}
          style={{ borderTop: '1px solid #c7c7c7' }}
        >
          Room Rental
          {activeSpecific == 'room' ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
              <path
                d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          ) : null}
        </CategoryItemStyle>

        <CategoryItemStyle
          onClick={() => handleClickSeason()}
          className={activeSpecific == 'season' ? 'active' : null}
          style={{ borderTop: '1px solid #c7c7c7' }}
        >
          Season
          {activeSpecific == 'season' ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
              <path
                d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          ) : null}
        </CategoryItemStyle>

        <CategoryItemStyle
          onClick={() => handleClickFarm()}
          className={activeSpecific == 'farm' ? 'active' : null}
          style={{ borderTop: '1px solid #c7c7c7' }}
        >
          Farms
          {activeSpecific == 'farm' ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
              <path
                d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          ) : null}
        </CategoryItemStyle>

        <CategoryItemStyle
          onClick={() => handleClickCommerce()}
          className={activeSpecific == 'commerce' ? 'active' : null}
          style={{ borderTop: '1px solid #c7c7c7' }}
        >
          Commerce and industry
          {activeSpecific == 'commerce' ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
              <path
                d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          ) : null}
        </CategoryItemStyle>
      </div>
    )
  }

  if (active === 'Cars and parts') {
    function handleClickCars() {
      try {
        setCategory('Cars')
      } catch {
        window.location.reload()
      }

      setActiveSpecific('cars')
    }

    function handleClickMoto() {
      try {
        setCategory('Motorcycles')
      } catch {
        window.location.reload()
      }

      setActiveSpecific('moto')
    }

    function handleClickBus() {
      try {
        setCategory('Bus')
      } catch {
        window.location.reload()
      }

      setActiveSpecific('bus')
    }

    function handleClickTrucks() {
      try {
        setCategory('Trucks')
      } catch {
        window.location.reload()
      }

      setActiveSpecific('trucks')
    }

    function handleClickBoats() {
      try {
        setCategory('Boats and Aircraft')
      } catch {
        window.location.reload()
      }

      setActiveSpecific('boats')
    }

    function handleClickParts() {
      try {
        setCategory('Parts and Accessories')
      } catch {
        window.location.reload()
      }

      setActiveSpecific('parts')
    }

    return (
      <div>
        <CategoryItemStyle
          onClick={() => handleClickCars()}
          className={activeSpecific == 'cars' ? 'active' : null}
          style={{ borderTop: '1px solid #c7c7c7' }}
        >
          Cars
          {activeSpecific == 'cars' ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
              <path
                d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          ) : null}
        </CategoryItemStyle>

        <CategoryItemStyle
          onClick={() => handleClickMoto()}
          className={activeSpecific == 'moto' ? 'active' : null}
          style={{ borderTop: '1px solid #c7c7c7' }}
        >
          Motorcycles
          {activeSpecific == 'moto' ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
              <path
                d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          ) : null}
        </CategoryItemStyle>

        <CategoryItemStyle
          onClick={() => handleClickBus()}
          className={activeSpecific == 'bus' ? 'active' : null}
          style={{ borderTop: '1px solid #c7c7c7' }}
        >
          Bus
          {activeSpecific == 'bus' ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
              <path
                d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          ) : null}
        </CategoryItemStyle>

        <CategoryItemStyle
          onClick={() => handleClickTrucks()}
          className={activeSpecific == 'trucks' ? 'active' : null}
          style={{ borderTop: '1px solid #c7c7c7' }}
        >
          Trucks
          {activeSpecific == 'trucks' ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
              <path
                d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          ) : null}
        </CategoryItemStyle>

        <CategoryItemStyle
          onClick={() => handleClickBoats()}
          className={activeSpecific == 'boats' ? 'active' : null}
          style={{ borderTop: '1px solid #c7c7c7' }}
        >
          Boats and Aircraft
          {activeSpecific == 'boats' ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
              <path
                d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          ) : null}
        </CategoryItemStyle>

        <CategoryItemStyle
          onClick={() => handleClickParts()}
          className={activeSpecific == 'parts' ? 'active' : null}
          style={{ borderTop: '1px solid #c7c7c7' }}
        >
          Parts and Accessories
          {activeSpecific == 'parts' ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
              <path
                d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          ) : null}
        </CategoryItemStyle>
      </div>
    )
  }

  if (active === 'To your house') {
    function handleClickFurniture() {
      try {
        setCategory('Furniture')
      } catch {
        window.location.reload()
      }

      setActiveSpecific('furniture')
    }

    function handleClickHome() {
      try {
        setCategory('Home Appliances')
      } catch {
        window.location.reload()
      }

      setActiveSpecific('home')
    }

    function handleClickConstruction() {
      try {
        setCategory('Construction Materials')
      } catch {
        window.location.reload()
      }

      setActiveSpecific('construction')
    }

    function handleClickHouse() {
      try {
        setCategory('Housewares')
      } catch {
        window.location.reload()
      }

      setActiveSpecific('housewares')
    }

    function handleClickDecoration() {
      try {
        setCategory('Decoration Objects')
      } catch {
        window.location.reload()
      }

      setActiveSpecific('decoration')
    }

    return (
      <div>
        <CategoryItemStyle
          onClick={() => handleClickFurniture()}
          className={activeSpecific == 'furniture' ? 'active' : null}
          style={{ borderTop: '1px solid #c7c7c7' }}
        >
          Furniture
          {activeSpecific == 'furniture' ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
              <path
                d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          ) : null}
        </CategoryItemStyle>

        <CategoryItemStyle
          onClick={() => handleClickHome()}
          className={activeSpecific == 'home' ? 'active' : null}
          style={{ borderTop: '1px solid #c7c7c7' }}
        >
          Home Appliances
          {activeSpecific == 'home' ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
              <path
                d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          ) : null}
        </CategoryItemStyle>

        <CategoryItemStyle
          onClick={() => handleClickConstruction()}
          className={activeSpecific == 'construction' ? 'active' : null}
          style={{ borderTop: '1px solid #c7c7c7' }}
        >
          Construction materials
          {activeSpecific == 'construction' ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
              <path
                d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          ) : null}
        </CategoryItemStyle>

        <CategoryItemStyle
          onClick={() => handleClickHouse()}
          className={activeSpecific == 'housewares' ? 'active' : null}
          style={{ borderTop: '1px solid #c7c7c7' }}
        >
          Housewares
          {activeSpecific == 'housewares' ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
              <path
                d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          ) : null}
        </CategoryItemStyle>

        <CategoryItemStyle
          onClick={() => handleClickDecoration()}
          className={activeSpecific == 'decoration' ? 'active' : null}
          style={{ borderTop: '1px solid #c7c7c7' }}
        >
          Decoration Objects
          {activeSpecific == 'decoration' ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
              <path
                d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          ) : null}
        </CategoryItemStyle>
      </div>
    )
  }

  if (active === 'Electronics and smartphones') {
    function handleClickVideogames() {
      try {
        setCategory('Videogames')
      } catch {
        window.location.reload()
      }

      setActiveSpecific('videogames')
    }

    function handleClickComputer() {
      try {
        setCategory('Computers')
      } catch {
        window.location.reload()
      }

      setActiveSpecific('computer')
    }

    function handleClickCell() {
      try {
        setCategory('Cellphones and Telephony')
      } catch {
        window.location.reload()
      }

      setActiveSpecific('cell')
    }

    function handleClickAudio() {
      try {
        setCategory('Audio, TV, video and photography')
      } catch {
        window.location.reload()
      }

      setActiveSpecific('audio')
    }

    return (
      <div>
        <CategoryItemStyle
          onClick={() => handleClickVideogames()}
          className={activeSpecific == 'videogames' ? 'active' : null}
          style={{ borderTop: '1px solid #c7c7c7' }}
        >
          Videogames
          {activeSpecific == 'videogames' ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
              <path
                d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          ) : null}
        </CategoryItemStyle>

        <CategoryItemStyle
          onClick={() => handleClickComputer()}
          className={activeSpecific == 'computer' ? 'active' : null}
          style={{ borderTop: '1px solid #c7c7c7' }}
        >
          Computers
          {activeSpecific == 'computer' ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
              <path
                d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          ) : null}
        </CategoryItemStyle>

        <CategoryItemStyle
          onClick={() => handleClickCell()}
          className={activeSpecific == 'cell' ? 'active' : null}
          style={{ borderTop: '1px solid #c7c7c7' }}
        >
          Cellphones and telephony
          {activeSpecific == 'cell' ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
              <path
                d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          ) : null}
        </CategoryItemStyle>

        <CategoryItemStyle
          onClick={() => handleClickAudio()}
          className={activeSpecific == 'audio' ? 'active' : null}
          style={{ borderTop: '1px solid #c7c7c7' }}
        >
          Audio, TV, video and photography
          {activeSpecific == 'audio' ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
              <path
                d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          ) : null}
        </CategoryItemStyle>
      </div>
    )
  }

  if (active === 'Music and hobbies') {
    function handleClickMusical() {
      try {
        setCategory('Musical Instruments')
      } catch {
        window.location.reload()
      }

      setActiveSpecific('musical')
    }

    function handleClickCds() {
      try {
        setCategory('CDs, DVDs')
      } catch {
        window.location.reload()
      }

      setActiveSpecific('cds')
    }

    function handleClickBooks() {
      try {
        setCategory('Books and magazines')
      } catch {
        window.location.reload()
      }

      setActiveSpecific('books')
    }

    function handleClickAntiques() {
      try {
        setCategory('Antiques')
      } catch {
        window.location.reload()
      }

      setActiveSpecific('antiques')
    }

    function handleClickHobbies() {
      try {
        setCategory('Hobbies and collections')
      } catch {
        window.location.reload()
      }

      setActiveSpecific('hobbies')
    }

    return (
      <div>
        <CategoryItemStyle
          onClick={() => handleClickMusical()}
          className={activeSpecific == 'musical' ? 'active' : null}
          style={{ borderTop: '1px solid #c7c7c7' }}
        >
          Musical Instruments
          {activeSpecific == 'musical' ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
              <path
                d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          ) : null}
        </CategoryItemStyle>

        <CategoryItemStyle
          onClick={() => handleClickCds()}
          className={activeSpecific == 'cds' ? 'active' : null}
          style={{ borderTop: '1px solid #c7c7c7' }}
        >
          CDs, DVDs
          {activeSpecific == 'cds' ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
              <path
                d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          ) : null}
        </CategoryItemStyle>

        <CategoryItemStyle
          onClick={() => handleClickBooks()}
          className={activeSpecific == 'books' ? 'active' : null}
          style={{ borderTop: '1px solid #c7c7c7' }}
        >
          Books and magazines
          {activeSpecific == 'books' ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
              <path
                d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          ) : null}
        </CategoryItemStyle>

        <CategoryItemStyle
          onClick={() => handleClickAntiques()}
          className={activeSpecific == 'antiques' ? 'active' : null}
          style={{ borderTop: '1px solid #c7c7c7' }}
        >
          Antiques
          {activeSpecific == 'antiques' ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
              <path
                d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          ) : null}
        </CategoryItemStyle>

        <CategoryItemStyle
          onClick={() => handleClickHobbies()}
          className={activeSpecific == 'hobbies' ? 'active' : null}
          style={{ borderTop: '1px solid #c7c7c7' }}
        >
          Hobbies and collections
          {activeSpecific == 'hobbies' ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
              <path
                d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          ) : null}
        </CategoryItemStyle>
      </div>
    )
  }

  if (active === 'Sports and leisure') {
    function handleClickSport() {
      try {
        setCategory('Sports and leisure')
      } catch {
        window.location.reload()
      }

      setActiveSpecific('sport')
    }

    function handleClickCycling() {
      try {
        setCategory('Cycling')
      } catch {
        window.location.reload()
      }

      setActiveSpecific('cycling')
    }

    return (
      <div>
        <CategoryItemStyle
          onClick={() => handleClickSport()}
          className={activeSpecific == 'sport' ? 'active' : null}
          style={{ borderTop: '1px solid #c7c7c7' }}
        >
          Sports and leisure
          {activeSpecific == 'sport' ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
              <path
                d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          ) : null}
        </CategoryItemStyle>

        <CategoryItemStyle
          onClick={() => handleClickCycling()}
          className={activeSpecific == 'cycling' ? 'active' : null}
          style={{ borderTop: '1px solid #c7c7c7' }}
        >
          Cycling
          {activeSpecific == 'cycling' ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
              <path
                d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          ) : null}
        </CategoryItemStyle>
      </div>
    )
  }

  if (active === 'Pets') {
    function handleClickDogs() {
      try {
        setCategory('Dogs')
      } catch {
        window.location.reload()
      }

      setActiveSpecific('dogs')
    }

    function handleClickCats() {
      try {
        setCategory('Cats')
      } catch {
        window.location.reload()
      }

      setActiveSpecific('cats')
    }

    function handleClickHorses() {
      try {
        setCategory('Horses')
      } catch {
        window.location.reload()
      }
      setActiveSpecific('horses')
    }

    function handleClickAquarium() {
      try {
        setCategory('Aquarium')
      } catch {
        window.location.reload()
      }

      setActiveSpecific('aquarium')
    }

    function handleClickRodents() {
      try {
        setCategory('Rodents')
      } catch {
        window.location.reload()
      }

      setActiveSpecific('rodents')
    }

    function handleClickOther() {
      try {
        setCategory('Other animals')
      } catch {
        window.location.reload()
      }

      setActiveSpecific('other')
    }

    return (
      <div>
        <CategoryItemStyle
          onClick={() => handleClickDogs()}
          className={activeSpecific == 'dogs' ? 'active' : null}
          style={{ borderTop: '1px solid #c7c7c7' }}
        >
          Dogs
          {activeSpecific == 'dogs' ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
              <path
                d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          ) : null}
        </CategoryItemStyle>

        <CategoryItemStyle
          onClick={() => handleClickCats()}
          className={activeSpecific == 'cats' ? 'active' : null}
          style={{ borderTop: '1px solid #c7c7c7' }}
        >
          Cats
          {activeSpecific == 'cats' ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
              <path
                d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          ) : null}
        </CategoryItemStyle>

        <CategoryItemStyle
          onClick={() => handleClickHorses()}
          className={activeSpecific == 'horses' ? 'active' : null}
          style={{ borderTop: '1px solid #c7c7c7' }}
        >
          Horses
          {activeSpecific == 'horses' ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
              <path
                d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          ) : null}
        </CategoryItemStyle>

        <CategoryItemStyle
          onClick={() => handleClickAquarium()}
          className={activeSpecific == 'aquarium' ? 'active' : null}
          style={{ borderTop: '1px solid #c7c7c7' }}
        >
          Aquarium
          {activeSpecific == 'aquarium' ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
              <path
                d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          ) : null}
        </CategoryItemStyle>

        <CategoryItemStyle
          onClick={() => handleClickRodents()}
          className={activeSpecific == 'rodents' ? 'active' : null}
          style={{ borderTop: '1px solid #c7c7c7' }}
        >
          Rodents
          {activeSpecific == 'rodents' ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
              <path
                d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          ) : null}
        </CategoryItemStyle>

        <CategoryItemStyle
          onClick={() => handleClickOther()}
          className={activeSpecific == 'other' ? 'active' : null}
          style={{ borderTop: '1px solid #c7c7c7' }}
        >
          Other animals
          {activeSpecific == 'other' ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
              <path
                d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          ) : null}
        </CategoryItemStyle>
      </div>
    )
  }

  if (active === 'Fashion and beauty') {
    function handleClickBeauty() {
      try {
        setCategory('Beauty')
      } catch {
        window.location.reload()
      }

      setActiveSpecific('beauty')
    }

    function handleClickClothes() {
      try {
        setCategory('Clothes')
      } catch {
        window.location.reload()
      }

      setActiveSpecific('clothes')
    }

    function handleClickBags() {
      try {
        setCategory('Bags')
      } catch {
        window.location.reload()
      }

      setActiveSpecific('bags')
    }

    function handleClickJewelry() {
      try {
        setCategory('Jewelry')
      } catch {
        window.location.reload()
      }

      setActiveSpecific('jewelry')
    }

    return (
      <div>
        <CategoryItemStyle
          onClick={() => handleClickBeauty()}
          className={activeSpecific == 'beauty' ? 'active' : null}
          style={{ borderTop: '1px solid #c7c7c7' }}
        >
          Beauty
          {activeSpecific == 'beauty' ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
              <path
                d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          ) : null}
        </CategoryItemStyle>

        <CategoryItemStyle
          onClick={() => handleClickClothes()}
          className={activeSpecific == 'clothes' ? 'active' : null}
          style={{ borderTop: '1px solid #c7c7c7' }}
        >
          Clothes
          {activeSpecific == 'clothes' ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
              <path
                d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          ) : null}
        </CategoryItemStyle>

        <CategoryItemStyle
          onClick={() => handleClickBags()}
          className={activeSpecific == 'bags' ? 'active' : null}
          style={{ borderTop: '1px solid #c7c7c7' }}
        >
          Bags
          {activeSpecific == 'bags' ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
              <path
                d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          ) : null}
        </CategoryItemStyle>

        <CategoryItemStyle
          onClick={() => handleClickJewelry()}
          className={activeSpecific == 'jewelry' ? 'active' : null}
          style={{ borderTop: '1px solid #c7c7c7' }}
        >
          Jewelry
          {activeSpecific == 'jewelry' ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
              <path
                d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          ) : null}
        </CategoryItemStyle>
      </div>
    )
  }

  if (active === 'Agro and industry') {
    function handleClickTractors() {
      try {
        setCategory('Tractors')
      } catch {
        window.location.reload()
      }

      setActiveSpecific('tractors')
    }

    function handleClickHeavy() {
      try {
        setCategory('Heavy machines')
      } catch {
        window.location.reload()
      }
      setActiveSpecific('heavy')
    }

    function handleClickMachines() {
      try {
        setCategory('Machines for industrial production')
      } catch {
        window.location.reload()
      }

      setActiveSpecific('machines')
    }

    return (
      <div>
        <CategoryItemStyle
          onClick={() => handleClickTractors()}
          className={activeSpecific == 'tractors' ? 'active' : null}
          style={{ borderTop: '1px solid #c7c7c7' }}
        >
          Tractors
          {activeSpecific == 'tractors' ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
              <path
                d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          ) : null}
        </CategoryItemStyle>

        <CategoryItemStyle
          onClick={() => handleClickHeavy()}
          className={activeSpecific == 'heavy' ? 'active' : null}
          style={{ borderTop: '1px solid #c7c7c7' }}
        >
          Heavy machines
          {activeSpecific == 'heavy' ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
              <path
                d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          ) : null}
        </CategoryItemStyle>

        <CategoryItemStyle
          onClick={() => handleClickMachines()}
          className={activeSpecific == 'machines' ? 'active' : null}
          style={{ borderTop: '1px solid #c7c7c7' }}
        >
          Machines for industrial production
          {activeSpecific == 'machines' ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
              <path
                d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          ) : null}
        </CategoryItemStyle>
      </div>
    )
  }

  if (active === 'Commerce and office') {
    function handleClickEquip() {
      try {
        setCategory('Equipments and furniture')
      } catch {
        window.location.reload()
      }

      setActiveSpecific('equip')
    }

    function handleClickTrailers() {
      try {
        setCategory('Trailers')
      } catch {
        window.location.reload()
      }

      setActiveSpecific('trailers')
    }

    function handleClickOtherItems() {
      try {
        setCategory('Other items for commerce and offices')
      } catch {
        window.location.reload()
      }

      setActiveSpecific('otheritems')
    }

    return (
      <div>
        <CategoryItemStyle
          onClick={() => handleClickEquip()}
          className={activeSpecific == 'equip' ? 'active' : null}
          style={{ borderTop: '1px solid #c7c7c7' }}
        >
          Equipments and furniture
          {activeSpecific == 'equip' ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
              <path
                d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          ) : null}
        </CategoryItemStyle>

        <CategoryItemStyle
          onClick={() => handleClickTrailers()}
          className={activeSpecific == 'trailers' ? 'active' : null}
          style={{ borderTop: '1px solid #c7c7c7' }}
        >
          Trailers
          {activeSpecific == 'trailers' ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
              <path
                d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          ) : null}
        </CategoryItemStyle>

        <CategoryItemStyle
          onClick={() => handleClickOtherItems()}
          className={activeSpecific == 'otheritems' ? 'active' : null}
          style={{ borderTop: '1px solid #c7c7c7' }}
        >
          Other items for commerce and offices
          {activeSpecific == 'otheritems' ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>AF4DCB3A-7ADB-49E9-A033-E46F16A6DB4F</title>
              <path
                d="M2.428 5.363L.8 6.95l4.342 4.234 9.77-8.996L13.284.6 5.142 8.009z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </svg>
          ) : null}
        </CategoryItemStyle>
      </div>
    )
  }
}
