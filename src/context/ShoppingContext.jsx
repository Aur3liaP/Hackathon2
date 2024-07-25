import PropTypes from "prop-types"
import { createContext, useState } from "react"

const defaultShoppingContext = {
  shoppingItems: [],
  setShoppingItems: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
}

const ShoppingContext = createContext(defaultShoppingContext)

const ShoppingContextProvider = ({ children }) => {
  const [shoppingItems, setShoppingItems] = useState(
    defaultShoppingContext.shoppingItems,
  )

  const addToCart = item => setShoppingItems([...shoppingItems, item])

  const removeFromCart = itemToRemove => {
    setShoppingItems(shoppingItems.filter(item => item !== itemToRemove))
  }

  return (
    <ShoppingContext.Provider
      value={{ shoppingItems, addToCart, removeFromCart }}
    >
      {children}
    </ShoppingContext.Provider>
  )
}

ShoppingContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ShoppingContext, ShoppingContextProvider }
