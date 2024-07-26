import BasktetProductCard from "../components/BasketProductCard"
import CartSummary from "../components/CartSummary"
import Navbar from "../components/Navbar"
import "./styles/Cart.css"

function Cart() {
    return (
      <main className="cart">
        <Navbar/>
        <div className="cart_container">
        <div className="cart_productContainer">
          <BasktetProductCard/>
        </div>
        <CartSummary/>
        </div>
      </main>
    )
  }
  
  export default Cart