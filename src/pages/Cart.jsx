import BasktetProductCard from "../components/BasketProductCard"
import CartSummary from "../components/CartSummary"
import "./styles/Cart.css"
import Navbar from "../components/Navbar"

function Cart() {
  return (
    <main className="cart">
      <Navbar />
      <div className="cart_container">
        <BasktetProductCard />
        <CartSummary />
      </div>
    </main>
  )
}

export default Cart
