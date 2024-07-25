import { Outlet } from "react-router-dom"
import HomeHero from "./HomeHero"
import "../styles/App.css"
import Navbar from "./Navbar"

function App() {
  return (
    <>
      <Outlet />
      <Navbar />
    </>
  )
}

export default App
