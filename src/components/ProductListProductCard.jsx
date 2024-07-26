import PropTypes from 'prop-types';
import "./styles/ProductListProductCard.css"
import Button from "./Button"

function ProductListProductCard({ item, onClick }) {
  return (
    <div className="card__container" onClick={onClick}>
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
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProductListProductCard
