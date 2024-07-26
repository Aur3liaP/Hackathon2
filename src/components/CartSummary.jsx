import PropTypes from "prop-types"
import RondSoleilSVG from "./svg/RondSoleilSVG"
import "./styles/CartSummary.css"
import { useEffect, useState } from "react"

function CartSummary({ items, quantities }) {
  const [cost, setCost] = useState(0)
  const [TVA, setTVA] = useState(0)
  const [discount, setDiscount] = useState("")
  const [discountAmount, setDiscountAmount] = useState(0)

  useEffect(() => {
    const calculateCost = (items, quantities) => {
      if (!items) {
        return 0
      } else {
        const result = items.reduce((acc, item) => {
          const quantity = quantities[item.id] || 1
          return acc + item.price * quantity
        }, 0)
        return result
      }
    }
    setCost(calculateCost(items, quantities))
  }, [items, quantities])

  useEffect(() => {
    const calculateTVA = price => (price * 20) / 100
    setTVA(calculateTVA(cost))
  }, [cost])

  useEffect(() => {
    if (discount === "3615") {
      setDiscountAmount(Math.round((cost * 10) / 100))
    } else {
      setDiscountAmount(0)
    }
  }, [discount, cost])

  const formatNumber = (number) => {
    return number.toFixed(2)
  }

  return (
    <section className="cartSummary__container">
      <RondSoleilSVG className="homehero__sun-SVG" />

        <div className="cartSummary">
            <div className="cartSummary__text">
                <div className="cartSummary__prices">
                    <h2 className="cartSummary__h2">Prix</h2>
                    <hr className="cartSummary__hr"/>
                        <div className="cartSummary__price">
                            <span className="cartSummary__span">Sous-total</span>
                            <p className="cartSummary__p">{formatNumber(cost)} F</p>
                        </div>
                        <hr className="cartSummary__hr"/>
                        <div className="cartSummary__price">
                            <span className="cartSummary__span">T.V.A</span>
                            <p className="cartSummary__p">{formatNumber(TVA)} F</p>
                        </div>
                    <hr className="cartSummary__hr"/>
                        <div className="cartSummary__code">
                            <p className="cartSummary__p"> Code Promo</p>
                            <input
                              id="code"
                              type="text"
                              value={discount}
                              onChange={(event) => setDiscount(event.target.value)}
                              placeholder="Entrer le code"
                            />
                        </div>
                        {discount === "3615" && (
                          <div className="cartSummary__discount">
                            <p className="cartSummary__discountp">Validé : 3615 -10%</p>
                          </div>
                        )}
                </div>

                <div className="cartSummary__totaltext">
                <hr className="cartSummary__hr"/>
                    <div className="cartSummary__total">
                        <h2 className="cartSummary__h2">Total</h2>
                        <p className="cartSummary__p">{formatNumber(cost + TVA - discountAmount)} F</p>
                    </div>
                </div>
            </div>
            <div className="cartSummary__order">
                <a href="https://buy.stripe.com/test_7sI28W5RQdl5crSdQR" target="blank">Commander</a>
            </div>
      </div>
    </section>
  )
}

CartSummary.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
  quantities: PropTypes.objectOf(PropTypes.number).isRequired,
}

export default CartSummary
