import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import { Home, Login, Profile, Register } from "./pages";

const App = () => {
  const { authUser } = useContext(AuthContext)

  const Auth = ({children}) => {
    return authUser ? children : <Navigate to='/user/login' />
  }

  const Guest = ({children}) => {
    return !authUser ? children : <Navigate to={-1} />
  }

  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={
          <Auth>
            <Home />
          </Auth>
        } />
        <Route path="profile" element={
          <Auth>
            <Profile />
          </Auth>
        } />
      </Route>
      <Route path="/user" element={<AuthLayout />}>
        <Route path="login" element={
          <Guest>
            <Login />
          </Guest>
        } />
        <Route path="register" element={
          <Guest>
            <Register />
          </Guest>
        } />
      </Route>
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  )
}

export default App
