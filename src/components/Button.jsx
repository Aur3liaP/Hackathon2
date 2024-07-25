import PropTypes from "prop-types"
import "./styles/Button.css"

function Button({ text = "J'achète", className }) {
  return <button className={`Button ${className}`}>{text}</button>
}

Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
}

export default Button
