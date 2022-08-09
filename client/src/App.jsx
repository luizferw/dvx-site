import Homepage from './pages/Homepage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import Announce from './pages/Announce'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createContext, useEffect, useState } from 'react'
import { useMemo } from 'react'
import DetailsPage from './pages/DetailsPage'
import NotFound from './pages/NotFound'

export const User = createContext(null)
export const Ads = createContext('')

export default function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <div className="App">
          <AdsContextProvider>
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Homepage />} />
              <Route
                path="/:city/:category/:title-:id"
                element={<DetailsPage />}
              />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/announce" element={<Announce />} />
              <Route path="/announce/:id" element={<Announce />} />
            </Routes>
          </AdsContextProvider>
        </div>
      </UserContextProvider>
    </BrowserRouter>
  )
}

export const AdsContextProvider = ({ children }) => {
  const [ads, setAds] = useState(null)
  const [filterByCategory, setFilterByCategory] = useState(null)
  const [filterBySearch, setFilterBySearch] = useState(null)

  const AdsValue = useMemo(() => {
    return {
      ads,
      setAds,
      filterByCategory,
      setFilterByCategory,
      filterBySearch,
      setFilterBySearch
    }
  }, [ads, filterByCategory, filterBySearch])

  useEffect(() => {
    const fetchData = async () => {
      if (filterByCategory) {
        const response = await fetch(
          `https://dvx-site.herokuapp.com/api/ads/category/${filterByCategory}`
        )
        const data = await response.json()
        setAds(data)
      } else if (filterBySearch) {
        const response = await fetch(
          `https://dvx-site.herokuapp.com/api/ads/search/${filterBySearch}`
        )
        const data = await response.json()
        setAds(data)
      } else {
        const response = await fetch('https://dvx-site.herokuapp.com/api/ads')
        const data = await response.json()
        setAds(data)
      }
    }

    fetchData()
  }, [filterByCategory, filterBySearch])

  return <Ads.Provider value={AdsValue}>{children}</Ads.Provider>
}

export const UserContextProvider = ({ children }) => {
  const userSaved = localStorage.getItem('user')
  const loggedSaved = localStorage.getItem('logged')

  const [logged, setLogged] = useState(loggedSaved || false)
  const [userData, setUserData] = useState(JSON.parse(userSaved) || null)

  useMemo(() => {
    localStorage.setItem('logged', logged)
    localStorage.setItem('user', JSON.stringify(userData))
  }, [logged, userData])

  const UserValue = useMemo(() => {
    return {
      logged,
      setLogged,
      userData,
      setUserData
    }
  }, [logged, userData])

  return <User.Provider value={UserValue}>{children}</User.Provider>
}
