import PropTypes from "prop-types"

function PlusSVG({ width = "45", height = "45", className, onClick }) {
  return (
    <svg
      onClick={onClick}
      className={className}
      width={width}
      height={height}
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.8125 8.25H42.1042V39.4167H8.8125V8.25Z" fill="black" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.83398 8.24992C7.83398 7.74366 8.27237 7.33325 8.81315 7.33325H42.1048C42.6456 7.33325 43.084 7.74366 43.084 8.24992V39.4166C43.084 39.9228 42.6456 40.3333 42.1048 40.3333H8.81315C8.27237 40.3333 7.83398 39.9228 7.83398 39.4166V8.24992ZM9.79232 9.16659V38.4999H41.1257V9.16659H9.79232Z"
        fill="black"
      />
      <path
        d="M4.89648 4.58325H38.1882V35.7499H4.89648V4.58325Z"
        fill="#00FF75"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.91699 4.58329C3.91699 4.07703 4.35538 3.66663 4.89616 3.66663H38.1878C38.7286 3.66663 39.167 4.07703 39.167 4.58329V35.75C39.167 36.2562 38.7286 36.6666 38.1878 36.6666H4.89616C4.35538 36.6666 3.91699 36.2562 3.91699 35.75V4.58329ZM5.87533 5.49996V34.8333H37.2087V5.49996H5.87533Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5843 11L19.5843 29.3334L23.501 29.3334L23.501 11L19.5843 11Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.7507 22H31.334V18.3334H11.7507V22Z"
        fill="black"
      />
    </svg>
  )
}

PlusSVG.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
}

export default PlusSVG
