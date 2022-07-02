import { CategoryItemStyle } from '../../../assets/styles/Announce/styleForm'

export default function CategoryItem(props) {
  const title = props.title
  const active = props.active == title
  const showPositive =
    title === "Children's articles" || title === 'Services' || title === 'Jobs'

  return (
    <CategoryItemStyle className={active ? 'active' : null}>
      <div>
        {props.img}
        <span className="item__title">{props.title}</span>
      </div>
      {props.arrow ? (
        <svg
          width="7"
          height="13"
          viewBox="0 0 7 13"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.806 5.938l-3.93-4.759c-.228-.275-.565-.228-.753.105-.189.333-.157.827.071 1.102l3.439 4.137-3.435 4.087c-.23.272-.264.765-.078 1.1.186.336.522.387.752.115l3.93-4.676c.262-.312.264-.896.004-1.211z"
            stroke="#9027B0"
            strokeWidth=".9"
            fill="#9027B0"
            fillRule="evenodd"
          ></path>
        </svg>
      ) : null}

      {showPositive ? (
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
  )
}
