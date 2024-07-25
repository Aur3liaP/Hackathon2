// import { Outlet } from "react-router-dom"
// import HomeHero from "./HomeHero"
// import "../styles/App.css"
// import Navbar from "./Navbar"
// import HomeProductSection from "./HomeProductSection"
import { Outlet } from "react-router-dom"
import "./styles/App.css"
// import Navbar from "./Navbar"
import Footer from "./Footer"

function App() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
