import PropTypes from "prop-types"

function RondSoleilSVG({ width = "136", height = "136", className }) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 136 136"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="67.5977"
        cy="67.5977"
        r="39.2067"
        stroke="black"
        strokeWidth="2.70391"
        strokeDasharray="5.41 5.41"
      />
      <circle
        cx="67.5977"
        cy="67.5976"
        r="18.9274"
        fill="#FFC700"
        stroke="black"
        strokeWidth="2.70391"
      />
    </svg>
  )
}

RondSoleilSVG.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
}

export default RondSoleilSVG
