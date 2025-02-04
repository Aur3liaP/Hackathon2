import PropTypes from "prop-types"

function DoublePlaySVG({ width = "43", height = "57", className }) {
  
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 43 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      overflow="visible"
    >
      <path
       
        d="M15.2294 2.97194L40.741 28.4835L15.2294 53.995L15.2294 2.97194Z"
        fill="#746BEB"
        stroke="black"
        strokeWidth="1.84962"
      />
      <path
        className="doubleplay-arrow1"
        d="M1.35685 2.97194L26.8684 28.4835L1.35684 53.995L1.35685 2.97194Z"
        fill="#FFC700"
        stroke="black"
        strokeWidth="1.84962"
      />
    </svg>
  )
}

DoublePlaySVG.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
}

export default DoublePlaySVG
