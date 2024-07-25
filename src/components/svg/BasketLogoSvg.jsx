import PropTypes from "react"

export default function BasketLogoSvg({ width = "70", height = "70" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="13.125"
        y="13.125"
        width="49.5833"
        height="49.5833"
        fill="black"
        stroke="black"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <rect
        x="7.29199"
        y="7.29169"
        width="49.5833"
        height="49.5833"
        fill="#39DBFF"
        stroke="black"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M39.3757 45.2084L45.209 30.6251H18.959L24.7923 45.2084H39.3757Z"
        fill="black"
        stroke="black"
        strokeWidth="8"
      />
      <path d="M42.292 33.5417H21.8753" stroke="#39DBFF" strokeWidth="4" />
      <path d="M39.376 39.3751H24.7926" stroke="#39DBFF" strokeWidth="4" />
      <path d="M37.917 18.9584L43.7503 30.625" stroke="black" strokeWidth="8" />
      <path d="M26.251 18.9584L20.4176 30.625" stroke="black" strokeWidth="8" />
    </svg>
  )
}

BasketLogoSvg.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
}

// BasketLogoSvg.defaultProps = {
//   width: "124",
//   height: "124",
// }
