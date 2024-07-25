import PropTypes from "prop-types"
import "./styles/Button.css"

function Button({ text = "J'achète", className, onClick }) {
  return (
    <button onClick={onClick} className={`Button ${className}`}>
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
