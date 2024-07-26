import RondSoleilSVG from "./svg/RondSoleilSVG"
import "./styles/CartSummary.css"
import { useState } from "react";


function CartSummary() {

    const [code, setCode] = useState('');

    const handleChange = (event) => {
          setCode(event.target.value);
      };

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
                            <p className="cartSummary__p">899 F</p>
                        </div>
                        <hr className="cartSummary__hr"/> 
                        <div className="cartSummary__price">
                            <span className="cartSummary__span">T.V.A</span>
                            <p className="cartSummary__p">19 F</p>
                        </div>
                    <hr className="cartSummary__hr"/> 
                        <div className="cartSummary__code">
                            <p className="cartSummary__p"> Code Promo</p>
                            <input id="code" type="text" value={code} onChange={handleChange} placeholder="Entrer le code"/>

                    </div>
                </div>
                
                
                <div className="cartSummary__totaltext">
                <hr className="cartSummary__hr"/> 
                    <div className="cartSummary__total">
                        <h2 className="cartSummary__h2">Total</h2>
                        <p className="cartSummary__p">899 F</p>
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
  
  export default CartSummary