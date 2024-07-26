import RondSoleilSVG from "./svg/RondSoleilSVG"
import "./styles/CartSummary.css"
import { useMediaQuery } from "react-responsive"
import { useEffect, useState } from "react"

function CartSummary({ items, quantities }) {
  const [cost, setCost] = useState(0)
  const [TVA, setTVA] = useState(0)
  const [discount, setDiscount] = useState(0)
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 900px)",
  })
  const isMobile = useMediaQuery({
    query: "(max-width: 899px)",
  })

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

  return (
    <section className="cartSummary__container">
      <RondSoleilSVG className="homehero__sun-SVG" />
      {isDesktopOrLaptop && (
        <div className="cartSummary">
          <div className="cartSummary__text">
            <div className="cartSummary__prices">
              <h2 className="cartSummary__h2">Prix</h2>
              <hr className="cartSummary__hr" />
              <div className="cartSummary__price">
                <span className="cartSummary__span">Sous-total</span>
                <p className="cartSummary__p">{cost}F</p>
              </div>
              <hr className="cartSummary__hr" />
              <div className="cartSummary__price">
                <span className="cartSummary__span">T.V.A</span>
                <p className="cartSummary__p">{TVA} F</p>
              </div>
              <hr className="cartSummary__hr" />
              <div className="cartSummary__code">
                <p className="cartSummary__p"> Code Promo</p>
                <input type="text" value="taper le code" />
              </div>
            </div>

            <div className="cartSummary__totaltext">
              <hr className="cartSummary__hr" />
              <div className="cartSummary__total">
                <h2 className="cartSummary__h2">Total</h2>
                <p className="cartSummary__p">{cost + TVA - discount} F</p>
              </div>
            </div>
          </div>
          <div className="cartSummary__order">
            <a
              href="https://buy.stripe.com/test_7sI28W5RQdl5crSdQR"
              target="blank"
            >
              Commander
            </a>
          </div>
        </div>
      )}
      {isMobile && (
        <div className="cartSummary">
          <div className="cartSummary__text">
            <div className="cartSummary__prices">
              <h2 className="cartSummary__h2">Prix</h2>
              <hr className="cartSummary__hr" />
              <div className="cartSummary__price">
                <span className="cartSummary__span">Sous-total</span>
                <p className="cartSummary__p">899 F</p>
              </div>
              <hr className="cartSummary__hr" />
              <div className="cartSummary__price">
                <span className="cartSummary__span">T.V.A</span>
                <p className="cartSummary__p">19 F</p>
              </div>
              <hr className="cartSummary__hr" />
              <div className="cartSummary__code">
                <p className="cartSummary__p"> Code Promo</p>
                <input type="text" value="taper le code" />
              </div>
            </div>

            <div className="cartSummary__totaltext">
              <hr className="cartSummary__hr" />
              <div className="cartSummary__total">
                <h2 className="cartSummary__h2">Total</h2>
                <p className="cartSummary__p">899 F</p>
              </div>
            </div>
          </div>
          <div className="cartSummary__order">
            <a
              href="https://buy.stripe.com/test_7sI28W5RQdl5crSdQR"
              target="blank"
            >
              Commander
            </a>
          </div>
        </div>
      )}
    </section>
  )
}

export default CartSummary
