import "./styles/Button.css"

function Button({ text = "J'achète", className }) {
  return <button className={`Button ${className}`}>{text}</button>
}

export default Button
