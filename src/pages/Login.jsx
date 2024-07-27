import { useLoaderData } from "react-router-dom"
import Navbar from "../components/Navbar"
// import axios from "axios"
import "./styles/Login.css"
import { useContext, useState } from "react"
import { UserContext } from "../context/UserContext"

function Login() {
  const [usernameTest, setUsernameTest] = useState(null)
  const [passwordTest, setPasswordTest] = useState(null)

  const { setUsername, username, setPassword } = useContext(UserContext)
  const data = useLoaderData()

  const handleLogin = () => {
    if (
      usernameTest === data[0].username &&
      passwordTest === data[0].password
    ) {
      setUsername(usernameTest)
      setPassword(passwordTest)
      alert("Bienvenue Lorys")
    } else {
      alert("Nom d'utilisateur ou mot de passe erroné")
    }
  }

  return (
    <>
      <div className="navbar-wrapper">
        <Navbar username={username} />
      </div>
      <div className="login__page">
        <div className="login__container">
          <form>
            <input
              placeholder="Username"
              type="text"
              required
              onChange={e => setUsernameTest(e.target.value)}
            />
            <input
              placeholder="Password"
              type="password"
              required
              onChange={e => setPasswordTest(e.target.value)}
            />
            <button
              className="butlog"
              type="button"
              onClick={e => handleLogin(e)}
            >
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
