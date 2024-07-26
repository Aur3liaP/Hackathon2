import { useContext, useState, useEffect } from "react"
import { useLoaderData } from "react-router"
import BasktetProductCard from "../components/BasketProductCard"
import CartSummary from "../components/CartSummary"
import "./styles/Cart.css"
import Navbar from "../components/Navbar"
import { ShoppingContext } from "../context/ShoppingContext"

function Cart() {
  const { shoppingItems } = useContext(ShoppingContext)
  const items = useLoaderData()

  return (
    <main className="cart">
      <Navbar />
      <div className="cart_container">
        {items
          .filter(item => shoppingItems.includes(item.id))
          .map(item => (
            <BasktetProductCard
              key={item.id}
              productTitle={item.name}
              productPrice={item.price}
            />
          ))}

        <CartSummary />
      </div>
    </main>
  )
}

export default Cart
