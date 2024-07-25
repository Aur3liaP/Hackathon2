import { Outlet } from "react-router-dom"
import Home from "../pages/Home"
import "../styles/App.css"
import Navbar from "./Navbar"
import HomeProductSection from "./HomeProductSection"

function App() {
  return (
    <>
      <Outlet />
      <Home />
    </>
  )
}

export default App
