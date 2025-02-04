import PropTypes from "prop-types"
import "./styles/BasketProductCard.css"
import { ShoppingContext } from "../context/ShoppingContext"
import MinusSVG from "./svg/MinusSVG"
import PlusSVG from "./svg/PlusSVG"
import DeleteSVG from "./svg/DeleteSVG"
import { useContext } from "react"

function BasktetProductCard({
  productTitle = "L'ordinateur",
  productPrice = 899,
  productImage,
  quantity,
  setQuantity,
  id,
}) {
  const { removeFromCart } = useContext(ShoppingContext)
  const handleIncrease = () => setQuantity(quantity + 1)

  const handleDecrease = () => {
    setQuantity(quantity > 1 ? quantity - 1 : 1)
  }

  return (
    <div className="basket-product-card">
      <DeleteSVG
        className="basket-product-card__delete-icon basket-product-card__button"
        onClick={() => removeFromCart(id)}
      />
      <div className="basket-product-card__container">
        <img src={productImage} alt="" className="basket-product-card__image" />
        <div className="basket-product-card__text-container">
          <span className="basket-product-card__product-title">
            {productTitle}
          </span>
          <div className="basket-product-card__price-container">
            <div className="basket-product-card__quantity-container">
              <MinusSVG
                className="basket-product-card__minus-icon basket-product-card__button"
                width="28px"
                onClick={handleDecrease}
              />
              <span className="basket-product-card__quantity">{quantity}</span>
              <PlusSVG
                onClick={handleIncrease}
                className="basket-product-card__plus-icon basket-product-card__button"
                width="28px"
              />
            </div>
            <span className="basket-product-card__price">{productPrice} F</span>
          </div>
        </div>
      </div>
    </div>
  )
}

BasktetProductCard.propTypes = {
  productTitle: PropTypes.string,
  productPrice: PropTypes.number,
  productImage: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  setQuantity: PropTypes.func.isRequired,
  id: PropTypes.number,
}

export default BasktetProductCard
