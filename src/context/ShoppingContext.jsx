import { createContext, useState } from "react"

const defaultShoppingContext = {
  shoppingItems: [],
  setShoppingItem: () => {},
}

const ShoppingContext = createContext(defaultShoppingContext)

const ShoppingContextProvider = ({ children }) => {
  const [shoppingItems, setShoppingItems] = useState(
    defaultShoppingContext.shoppingItems,
  )

  return (
    <ShoppingContext.Provider value={{ shoppingItems, setShoppingItems }}>
      {children}
    </ShoppingContext.Provider>
  )
}

export default ShoppingContextProvider
