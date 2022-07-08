import AdsItem from '../AdsItem'
import { RecentAdsStyle } from '../../../../assets/styles/Homepage/styleMain'
import { useContext, useEffect, useState } from 'react'
import { Ads } from '../../../../App'
import { format, parseISO } from 'date-fns'

export default function RecentAds() {
  const { ads } = useContext(Ads)
  const [recentAds, setRecentAds] = useState('')
  const today = format(new Date(), 'dd/MM/yy')

  useEffect(() => {
    if (ads) {
      setRecentAds(
        ads
          .slice(0, 15)
          .filter(
            ad =>
              format(parseISO(ad.createdAt), 'dd') <= today.split('/')[0] &&
              format(parseISO(ad.createdAt), 'dd') >= today.split('/')[0] - 5 &&
              format(parseISO(ad.createdAt), 'MM/yy') ==
                today.split('/').slice(1, 2) +
                  '/' +
                  today.split('/').slice(2, 3)
          )
      )
    }
  }, [ads])

  return (
    <RecentAdsStyle>
      <h2>Recent Ads</h2>
      <div className="recent-items">
        {recentAds &&
          recentAds.map((item, index) => {
            return (
              <AdsItem
                ads={item}
                key={index}
                img={`https://via.placeholder.com/300`}
              />
            )
          })}
      </div>
    </RecentAdsStyle>
  )
}
