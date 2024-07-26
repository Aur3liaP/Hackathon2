import BasktetProductCard from "../components/BasketProductCard"
import CartSummary from "../components/CartSummary"
import "./styles/Cart.css"

function Cart() {
    return (
      <main className="cart">
        <div className="cart_container">
        <BasktetProductCard/>
        <CartSummary/>
        </div>
      </main>
    )
  }
  
  export default Cart