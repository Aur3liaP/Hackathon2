import { useContext, useState, useEffect } from "react"
import { useLoaderData } from "react-router"
import BasktetProductCard from "../components/BasketProductCard"
import CartSummary from "../components/CartSummary"
import "./styles/Cart.css"
import Navbar from "../components/Navbar"
import { ShoppingContext } from "../context/ShoppingContext"

function Cart() {
  const [quantity, setQuantity] = useState(1)
  const [isLoaded, setIsLoaded] = useState(false)
  const [filteredItems, setFilteredItems] = useState([])

  const { shoppingItems } = useContext(ShoppingContext)
  const items = useLoaderData()

  useEffect(() => {
    const filteredItems = items.filter(item => shoppingItems.includes(item.id))
    setFilteredItems(filteredItems)
    setIsLoaded(true)
    return
  }, [])

  return (
    <main className="cart">
      <Navbar />
      <div className="cart_container">
        {filteredItems.map(item => (
          <BasktetProductCard
            key={item.id}
            productTitle={item.name}
            productPrice={item.price}
            productImage={item.image}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        ))}
        {isLoaded ? (
          <CartSummary items={filteredItems} quantity={quantity} />
        ) : (
          <p>loading</p>
        )}
      </div>
    </main>
  )
}

export default Cart
