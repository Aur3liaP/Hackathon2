import { ShoppingContextProvider } from "../context/ShoppingContext"
import { Outlet } from "react-router-dom"
import "./styles/App.css"
import Footer from "./Footer"
import { UserContextProvider } from "../context/UserContext"

function App() {
  return (
    <>
      <UserContextProvider>
        <ShoppingContextProvider>
          <Outlet />
        </ShoppingContextProvider>
      </UserContextProvider>
      <Footer />
    </>
  )
}

export default App
