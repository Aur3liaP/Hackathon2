import { Outlet } from "react-router-dom"
import Home from "../pages/Home"
import "../styles/App.css"

function App() {
  return (
    <>
      <Outlet />
      <Home />
    </>
  )
}

export default App
