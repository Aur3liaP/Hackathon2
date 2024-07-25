import { Outlet } from "react-router-dom"
import Home from "../pages/Home"
import "../styles/App.css"
import Footer from "./Footer"

function App() {
  return (
    <>
      <Outlet />
      <Home />
      <Footer />
    </>
  )
}

export default App
