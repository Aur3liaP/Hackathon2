import { Outlet } from "react-router-dom"
import HomeHero from "./HomeHero"
import "../styles/App.css"
import Navbar from "./Navbar"
import HomeProductSection from "./HomeProductSection"

function App() {
  return (
    <>
      <Outlet />
      <Navbar />
      <HomeProductSection/>
    </>
  )
}

export default App
