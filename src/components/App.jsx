import { ShoppingContextProvider } from "../context/ShoppingContext"
import { Outlet } from "react-router-dom"
import "./styles/App.css"
import Footer from "./Footer"

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <ShoppingContextProvider>
        <Outlet />
      </ShoppingContextProvider>
      <Footer />
    </>
  )
}

export default App
