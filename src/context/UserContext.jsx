import { createContext, useState } from "react"
import PropTypes from "prop-types"

const defaultUserContext = {
  username: "",
  setUsername: () => {},
  password: "",
  setPassword: () => {},
}

const UserContext = createContext(defaultUserContext)

const UserContextProvider = ({ children }) => {
  const [username, setUsername] = useState(defaultUserContext.username)
  const [password, setPassword] = useState(defaultUserContext.password)
  //   handleLogin = () => {}
  return (
    <UserContext.Provider
      value={{ username, setUsername, password, setPassword }}
    >
      {children}
    </UserContext.Provider>
  )
}

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { UserContext, UserContextProvider }
