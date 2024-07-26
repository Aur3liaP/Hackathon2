import PropTypes from "prop-types"
import { useContext, useState, useEffect } from "react"
import { useLoaderData } from "react-router"
import BasktetProductCard from "../components/BasketProductCard"
import CartSummary from "../components/CartSummary"
import Navbar from "../components/Navbar"
import { ShoppingContext } from "../context/ShoppingContext"
import "./styles/Cart.css"

function Cart() {
  const [quantities, setQuantities] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)
  const [filteredItems, setFilteredItems] = useState([])

  const { shoppingItems } = useContext(ShoppingContext)
  const items = useLoaderData()

  useEffect(() => {
    const filteredItems = items.filter(item => shoppingItems.includes(item.id))
    setFilteredItems(filteredItems)
    setIsLoaded(true)
    const initialQuantities = filteredItems.reduce((acc, item) => {
      acc[item.id] = 1
      return acc
    }, {})
    setQuantities(initialQuantities)
  }, [items, shoppingItems])

  const updateQuantity = (itemId, newQuantity) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [itemId]: newQuantity,
    }))
  }

  return (
    <main className="cart">
      <Navbar />
      <div className="cart_container">
        <div className="cart_productContainer">
        {filteredItems.map(item => (
          <BasktetProductCard
            key={item.id}
            id={item.id}
            productTitle={item.name}
            productPrice={item.price}
            productImage={item.image}
            quantity={quantities[item.id]}
            setQuantity={newQuantity => updateQuantity(item.id, newQuantity)}
          />
        ))}
        </div>
        {isLoaded ? (
          <CartSummary items={filteredItems} quantities={quantities} />
        ) : (
          <p>loading</p>
        )}
      </div>
    </main>
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

export default Cart
