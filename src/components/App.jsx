// import { Outlet } from "react-router-dom"
// import HomeHero from "./HomeHero"
import "../styles/App.css"
// import Navbar from "./Navbar"
// import HomeProductSection from "./HomeProductSection"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default App
