import { format, parseISO } from 'date-fns'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DetailsContentLeft from '../components/Details/DetailsContentLeft'
import DetailsContentRight from '../components/Details/DetailsContentRight'
import Footer from '../components/Homepage/Footer/Footer'
import Navbar from '../components/Homepage/Navbar/Navbar'

export default function DetailsPage() {
  const [adDetail, setAdDetail] = useState(null)
  const [dividedPrice, setDividedPrice] = useState(null)
  const [createdAt, setCreatedAt] = useState({})
  const { id } = useParams()

  let priceDotted = null
  adDetail ? (priceDotted = addDots(adDetail.price)) : null

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://dvx-site.herokuapp.com/api/ads/${id}`
      )
      const data = await response.json()
      const date = format(parseISO(data.createdAt), 'dd/MM')
      const hour = format(parseISO(data.createdAt), 'HH:mm')
      setAdDetail(data)
      setCreatedAt({ date, hour })
      data.price.length <= 4
        ? setDividedPrice((data.price / 12 + data.price * 0.1).toFixed(2))
        : null
    }

    fetchData()
  }, [])

  function addDots(nStr) {
    nStr += ''
    let x = nStr.split('.')
    let x1 = x[0]
    let x2 = x.length > 1 ? '.' + x[1] : ''
    var rgx = /(\d+)(\d{3})/
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + '.' + '$2') // changed comma to dot here
    }
    return x1 + x2
  }

  const props = { adDetail, dividedPrice, createdAt, priceDotted }

  return (
    <div>
      <div className="DetailsPage bg-white">
        <Navbar />
        <div className="mx-10 mt-8 grid grid-cols-2">
          <DetailsContentLeft props={props} />
          <DetailsContentRight props={props} />
        </div>
      </div>
      <Footer />
      <div className="bg-white py-16"></div>
    </div>
  )
}