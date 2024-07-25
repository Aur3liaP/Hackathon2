import PropTypes from "prop-types"

function DeleteSVG({ width = "40", height = "41", className, onClick }) {
  return (
    <svg
      onClick={onClick}
      className={className}
      width={width}
      height={height}
      viewBox="0 0 40 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5.78906"
        y="5.89478"
        width="32.2105"
        height="33.1053"
        fill="black"
        stroke="black"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <rect
        x="2"
        y="2"
        width="32.2105"
        height="33.1053"
        fill="#FF5E5E"
        stroke="black"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M26.1436 10.2908L10.0662 26.8147"
        stroke="black"
        strokeWidth="8"
      />
      <path
        d="M10.0664 10.2908L26.1438 26.8148"
        stroke="black"
        strokeWidth="8"
      />
    </svg>
  )
}

DeleteSVG.propTypes = {
  onClick: PropTypes.func,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
}

export default DeleteSVG
