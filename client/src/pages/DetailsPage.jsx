import { format, parseISO } from 'date-fns'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { axiosInstance as axios } from '../libs/axios'
import DetailsContentLeft from '../components/Details/DetailsContentLeft'
import DetailsContentRight from '../components/Details/DetailsContentRight'
import Footer from '../components/Homepage/Footer/Footer'
import Navbar from '../components/Homepage/Navbar/Navbar'

export default function DetailsPage() {
  const [adDetail, setAdDetail] = useState(null)
  const [dividedPrice, setDividedPrice] = useState(null)
  const [createdAt, setCreatedAt] = useState({})
  const { id } = useParams()
  const [priceDotted, setPriceDotted] = useState('')

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`/ads/${id}`)
      setAdDetail(response.data)

      const date = format(parseISO(response.data.createdAt), 'dd/MM')
      const hour = format(parseISO(response.data.createdAt), 'HH:mm')
      setCreatedAt({ date, hour })

      setPriceDotted(addDots(response.data.price))

      response.data.price.length <= 4
        ? setDividedPrice(
            (response.data.price / 12 + response.data.price * 0.1).toFixed(2)
          )
        : null
    }

    fetchData()
  }, [id])

  function addDots(nStr) {
    nStr += ''
    let x = nStr.split('.')
    let x1 = x[0]
    let x2 = x.length > 1 ? '.' + x[1] : ''
    var rgx = /(\d+)(\d{3})/
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + '.' + '$2')
    }
    return x1 + x2
  }

  return (
    <div>
      <div className="DetailsPage bg-white">
        <Navbar />
        <div className="flex flex-col lmd:mx-10 lmd:mt-8 lmd:grid lmd:grid-cols-2 lmd:gap-4">
          <DetailsContentLeft
            props={{ adDetail, dividedPrice, createdAt, priceDotted }}
          />
          <DetailsContentRight
            props={{ adDetail, dividedPrice, createdAt, priceDotted }}
          />
        </div>
      </div>
      <Footer />
      <div className="bg-white py-16"></div>
    </div>
  )
}
