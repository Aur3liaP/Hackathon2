import PropTypes from "prop-types"
import "./styles/HomeProductCard.css"
import Button from "./Button"

function HomeProductCard({ name, price, image, onClick }) {
  return (
    <>
      <div className="pdtcard__container" onClick={onClick}>
        <div className="pdtcard__info">
          <p className="pdtcard__title">{name}</p>
          <p className="pdtcard__price">{price}&#8355;</p>
          <Button className="pdtcard__button" />
        </div>
        <img className="pdtcard__img" src={image} alt={name} />
      </div>
    </>
  )
}

HomeProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default HomeProductCard
