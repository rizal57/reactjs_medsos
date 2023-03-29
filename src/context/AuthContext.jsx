import { useReducer } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  authUser: JSON.parse(localStorage.getItem('user')) || null
}
export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.authUser))
  }, [state.authUser])

  return (
    <AuthContext.Provider value={{ authUser: state.authUser, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}
