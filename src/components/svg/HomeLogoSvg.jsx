import PropTypes from "prop-types"

export default function HomeLogoSvg({ width = "124", height = "124" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 124 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M97.6758 79.1467H25.991C26.6428 59.9125 42.4405 44.52 61.8334 44.52C81.2263 44.52 97.024 59.9125 97.6758 79.1467Z"
        fill="#746BEB"
        stroke="black"
        strokeWidth="2.47333"
      />
      <path
        d="M85.2981 79.1466H38.3687C39.0118 66.7446 49.2714 56.8866 61.8334 56.8866C74.3955 56.8866 84.655 66.7446 85.2981 79.1466Z"
        fill="#FFC700"
        stroke="black"
        strokeWidth="2.47333"
      />
      <path
        d="M72.8955 79.1467H50.7714C51.3866 73.5817 56.1045 69.2533 61.8335 69.2533C67.5624 69.2533 72.2804 73.5817 72.8955 79.1467Z"
        fill="white"
        stroke="black"
        strokeWidth="2.47333"
      />
    </svg>
  )
}

HomeLogoSvg.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
}

// HomeLogoSvg.defaultProps = {
//   width: "124",
//   height: "124",
// }
