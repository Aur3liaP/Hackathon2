import RondSoleilSVG from "./svg/RondSoleilSVG"
import "./styles/CartSummary.css"

function CartSummary() {
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
                            <p className="cartSummary__p">899F</p>
                        </div>
                        <hr className="cartSummary__hr"/> 
                        <div className="cartSummary__price">
                            <span className="cartSummary__span">T.V.A</span>
                            <p className="cartSummary__p">19F</p>
                        </div>
                    <hr className="cartSummary__hr"/> 
                        <div className="cartSummary__code">
                            <p className="cartSummary__p"> Code Promo</p>
                            <input type="text" value="taper le code"/>
                    </div>
                </div>
                
                
                <div className="cartSummary__totaltext">
                <hr className="cartSummary__hr"/> 
                    <div className="cartSummary__total">
                        <h2 className="cartSummary__h2">Total</h2>
                        <p className="cartSummary__p">899F</p>
                    </div>
                </div>
            </div>
            <div className="cartSummary__order">
                <a href="">Commander</a>
            </div>
        </div>
      </section>
    )
  }
  
  export default CartSummary