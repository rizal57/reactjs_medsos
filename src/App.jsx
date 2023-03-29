import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components";
import { AuthContext } from "./context/AuthContext";
import MainLayout from "./layouts/MainLayout";
import { Home } from "./pages";

const App = () => {
  const { authUser } = useContext(AuthContext)

  const Auth = ({children}) => {
    return authUser !== null ? children : <Navigate to='/login' />
  }

  const Guest = ({children}) => {
    return authUser == null ? children : <Navigate to={-1} />
  }

  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={
          <Auth>
            <Home />
          </Auth>
        } />
        <Route path="favorite" element={
          <Auth>
            <h1>Favorite</h1>
          </Auth>
        } />
      </Route>
      <Route path="/login" element={
        <Guest>
          <Login />
        </Guest>
      } />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  )
}

export default App
