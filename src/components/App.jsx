import { Outlet } from "react-router-dom"
import HomeTeamCard from "./HomeTeamCard"
import "./styles/App.css"
import Navbar from "./Navbar"


function App() {
  return (
    <>
      <Outlet />
      <Navbar />
      <HomeTeamCard/>
    </>
  )
}

export default App
