import PropTypes from "prop-types"

function RemoveSVG({ width = "45", height = "45", className, onClick }) {
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
      <path d="M8.0625 8.4375H38.5208V40.3125H8.0625V8.4375Z" fill="black" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.16602 8.4375C7.16602 7.91973 7.56709 7.5 8.06185 7.5H38.5202C39.0149 7.5 39.416 7.91973 39.416 8.4375V40.3125C39.416 40.8303 39.0149 41.25 38.5202 41.25H8.06185C7.56709 41.25 7.16602 40.8303 7.16602 40.3125V8.4375ZM8.95768 9.375V39.375H37.6243V9.375H8.95768Z"
        fill="black"
      />
      <path
        d="M4.47852 4.6875H34.9368V36.5625H4.47852V4.6875Z"
        fill="#FFB443"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.58301 4.6875C3.58301 4.16973 3.98409 3.75 4.47884 3.75H34.9372C35.4319 3.75 35.833 4.16973 35.833 4.6875V36.5625C35.833 37.0803 35.4319 37.5 34.9372 37.5H4.47884C3.98409 37.5 3.58301 37.0803 3.58301 36.5625V4.6875ZM5.37467 5.625V35.625H34.0413V5.625H5.37467Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.6667 22.5H10.75V18.75H28.6667V22.5Z"
        fill="black"
      />
    </svg>
  )
}

RemoveSVG.propTypes = {
  width: PropTypes.string,
  onClick: PropTypes.func,
  height: PropTypes.string,
  className: PropTypes.string,
}

export default RemoveSVG
