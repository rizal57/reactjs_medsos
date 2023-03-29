import { FcGoogle } from "react-icons/fc";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [loading, setLoading] = useState(false)

  const { dispatch } = useContext(AuthContext)

  const navigate = useNavigate()

  const googleLoginHendler = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user
        dispatch({type: 'LOGIN', payload: user})
        navigate('/')
      }).catch(error => {
        const errorMessage = error.message;
        const email = error.customData.email;
        console.error({errorMessage, email})
      })
  }

  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex items-center justify-center h-[15vh] md:h-screen bg-teal-400 w-full">
        <h1 className="font-bold text-teal-50 text-3xl md:text-5xl lg:text-7xl">Logo.</h1>
      </div>
      <div className="grid place-content-center bg-teal-50 h-[85vh] md:h-screen w-full">
        <button
          onClick={googleLoginHendler}
          className="py-2 px-4 rounded-lg bg-slate-50 shadow-md flex gap-3 items-center text-slate-600 hover:bg-slate-100 transition duration-300"
        >
          <FcGoogle />
          Signin with Google
        </button>
      </div>
    </div>
  )
}

export default Login
