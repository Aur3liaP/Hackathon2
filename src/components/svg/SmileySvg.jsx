import { PropTypes } from "prop-types"

export default function SmileySvg({ width = "61", height = "61" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 61 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="30.1133"
        cy="30.1133"
        r="28.7247"
        fill="#F3CEB4"
        stroke="black"
        strokeWidth="2.77733"
      />
      <circle
        cx="9.06472"
        cy="29.6002"
        r="4.13211"
        stroke="black"
        strokeWidth="2.77733"
      />
      <circle
        cx="35.1624"
        cy="29.6002"
        r="4.13211"
        stroke="black"
        strokeWidth="2.77733"
      />
      <path
        d="M34.7024 42.0306H9.52448C10.216 48.3715 15.5885 53.3062 22.1134 53.3062C28.6384 53.3062 34.0108 48.3715 34.7024 42.0306Z"
        fill="#BC7F7F"
        stroke="black"
        strokeWidth="2.77733"
      />
    </svg>
  )
}

SmileySvg.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
}
