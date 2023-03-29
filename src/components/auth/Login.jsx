import { FcGoogle } from "react-icons/fc";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FormControl, Input, Label } from "../input";
import { ButtonLogin } from "../button";
import { Link } from "react-router-dom";

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
      <div className="flex items-center justify-center h-[15vh] md:h-screen bg-violet-400 w-full">
        <h1 className="font-bold text-violet-50 text-3xl md:text-5xl lg:text-7xl">Logo.</h1>
      </div>
      <div className="grid place-content-center bg-violet-50 h-[85vh] md:h-screen w-full">
        <div className="mb-4">
          <form autoComplete="off">
            <FormControl>
              <Label htmlFor='email' text='Email'/>
              <Input type='email' id='email' placeholder='Your email here...' />
            </FormControl>
            <FormControl>
              <Label htmlFor='password' text='Password' />
              <Input type='password' id='password' placeholder='Your password here...' />
            </FormControl>
            <div className="mt-5">
              <ButtonLogin text='Login' variant='bg-violet-500 hover:bg-violet-600 text-white' />
            </div>
          </form>
        </div>
        <div className="mb-3 text-slate-600">
          <span className="pr-4">-----------------</span>
          <span className="text-center mb-3">Atau login dengan</span>
          <span className="pl-4">-----------------</span>
        </div>
        <ButtonLogin
          onClick={googleLoginHendler}
        >
          <FcGoogle />
          Signin with Google
        </ButtonLogin>

        <div className="flex justify-center mt-5">
          <span className="text-slate-600 pr-2">Don't have an account?</span>
          <Link to='/register' className="text-violet-500 font-semibold">Register</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
