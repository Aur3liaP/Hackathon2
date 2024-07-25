import { useState } from "react"
import PropTypes from "prop-types"
import "./ BasketProductCard.css"
import minitel from "../assets/minitel2API.png"
import MinusSVG from "./svg/MinusSVG"
import PlusSVG from "./svg/PlusSVG"
import DeleteSVG from "./svg/DeleteSVG"

function BasktetProductCard({
  productTitle = "L'ordinateur",
  productPrice = 899,
}) {
  const [quantity, setQuantity] = useState(1)

  const handleIncrease = () => setQuantity(prevQuantity => prevQuantity + 1)

  const handleDecrease = () => {
    setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0))
  }

  return (
    <div className="basket-product-card">
      <DeleteSVG className="basket-product-card__delete-icon" />
      <div className="basket-product-card__container">
        <img src={minitel} alt="" className="basket-product-card__image" />
        <div className="basket-product-card__text-container">
          <span className="basket-product-card__product-title">
            {productTitle}
          </span>
          <div className="basket-product-card__quantity-container">
            <MinusSVG
              className="basket-product-card__minus-icon"
              width="20px"
              onClick={handleDecrease}
            />
            <span className="basket-product-card__quantity">{quantity}</span>
            <PlusSVG
              onClick={handleIncrease}
              className="basket-product-card__plus-icon"
              width="20px"
            />
            <span className="basket-product-card__price">{productPrice}ff</span>
          </div>
        </div>
      </div>
    </div>
  )
}

BasktetProductCard.propTypes = {
  productTitle: PropTypes.string,
  productPrice: PropTypes.number,
}

export default BasktetProductCard
