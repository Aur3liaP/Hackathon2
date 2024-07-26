// import { Outlet } from "react-router-dom"
// import HomeHero from "./HomeHero"
// import "../styles/App.css"
// import Navbar from "./Navbar"
// import HomeProductSection from "./HomeProductSection"
import { Outlet } from "react-router-dom"
import "./styles/App.css"
// import Navbar from "./Navbar"
import Footer from "./Footer"
import { UserContextProvider } from "../context/UserContext"

function App() {
  return (
    <>
      <UserContextProvider>
        <Outlet />
      </UserContextProvider>
      <Footer />
    </>
  )
}

export default App
