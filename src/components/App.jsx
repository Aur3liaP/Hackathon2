import { Outlet } from "react-router-dom"
import "./styles/App.css"
import Navbar from "./Navbar"


function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
