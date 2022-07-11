import AdsItem from '../AdsItem'
import { RecentAdsStyle } from '../../../../assets/styles/Homepage/styleMain'
import { useContext } from 'react'
import { Ads } from '../../../../App'

export default function RecentAds() {
  const { ads } = useContext(Ads)

  return (
    <RecentAdsStyle>
      <h2>Recent Ads</h2>
      <div className="recent-items">
        {ads &&
          ads.map((item, index) => {
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
