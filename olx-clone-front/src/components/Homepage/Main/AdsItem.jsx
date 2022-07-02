import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AdsItemStyle } from '../../../assets/styles/Homepage/styleMain'

export default function AdsItem({ ads, minWidth, img }) {
  const [title, setTitle] = useState('')
  const [city, setCity] = useState('')
  const [category, setCategory] = useState('')
  let priceDotted = null

  ads ? (priceDotted = addDots(ads.price)) : null

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

  useEffect(() => {
    if (ads.title && ads.address.city && ads.category) {
      setTitle(
        ads.title
          .toLowerCase()
          .trim()
          .replace(/[^\w\s-]/g, '')
          .replace(/[\s_-]+/g, '-')
          .replace(/^-+|-+$/g, '')
      )

      setCity(
        ads.address.city
          .toLowerCase()
          .trim()
          .replace(/[^\w\s-]/g, '')
          .replace(/[\s_-]+/g, '-')
          .replace(/^-+|-+$/g, '')
      )

      setCategory(
        ads.category
          .toLowerCase()
          .trim()
          .replace(/[^\w\s-]/g, '')
          .replace(/[\s_-]+/g, '-')
          .replace(/^-+|-+$/g, '')
      )
    }
  }, [])

  return (
    <AdsItemStyle minWidth={minWidth} key={ads._id}>
      <Link to={`/${city}/${category}/${title}-${ads._id}`}>
        <img className="item-img" src={img} />
        <h3 className="item-title">{ads.title}</h3>
        <span className="item-price">$ {priceDotted}</span>
      </Link>
    </AdsItemStyle>
  )
}
