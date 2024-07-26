import PropTypes from "prop-types"
import "./styles/ProductListProductCard.css"
import Button from "./Button"

function ProductListProductCard({ item }) {
  return (
    <div className="card__container">
      <div className="card">
        <div className="card__image">
          <img src={item.image} alt="" />
        </div>
        <div className="card__infos">
          <div className="card__text">
            <p className="card__article">{item.name}</p>
            <p className="card__price">{item.price} F</p>
          </div>
          <Button text="Acheter !" className={"button"} />
        </div>
      </div>
    </div>
  )
}

ProductListProductCard.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired
  }).isRequired
}

export default ProductListProductCard
