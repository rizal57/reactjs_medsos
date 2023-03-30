import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { useContext } from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { FcGoogle } from "react-icons/fc"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { auth } from "../../config/firebaseConfig"
import { AuthContext } from "../../context/AuthContext"
import { ButtonLogin } from "../button"
import { FormControl, Label } from "../input"

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const [registerError, setRegisterError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

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
        setRegisterError("Login failed")
      })
  }

  const onSubmit = (data) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user
        dispatch({type: 'LOGIN', payload: user})
        navigate('/')
        setIsLoading(false)
      }).catch((error) => {
        setRegisterError('Email or password alredy!')
      })
  }

  return (
    <>
      {registerError && <span className="text-red-500 mb-3 text-center">{registerError}</span>}
      <div className="mb-4 max-w-[300px]">
        <div className="mb-4">
          <h1 className="text-2xl font-semibold text-violet-500 text-center">Register</h1>
        </div>
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          {/* email */}
          <FormControl>
            <Label htmlFor='email' text='Email'/>
            <input
              className="py-2 px-4 shadow-md rounded-md border-none outline-none focus:ring-2 focus:ring-violet-500 focus:border focus:border-slate-300 text-slate-800 transition duration-300 placeholder:text-base placeholder:text-slate-400"
              type='email'
              id='email'
              {...register('email', {
                required: { value: true, message: 'Email is required' },
                pattern: { value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, message: 'Invalid email' }
              })}
              placeholder='Your email here...'
            />
            { errors.email && <small className="text-red-500">{errors?.email?.message}</small> }
          </FormControl>

          {/* password */}
          <FormControl>
            <Label htmlFor='password' text='Password' />
            <input
              className="py-2 px-4 shadow-md rounded-md border-none outline-none focus:ring-2 focus:ring-violet-500 focus:border focus:border-slate-300 text-slate-800 transition duration-300 placeholder:text-base placeholder:text-slate-400"
              type='password'
              id='password'
              {...register('password', {
                required: { value: true, message: 'Password is required' },
                pattern: { value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, message: 'Minimum eight characters, at least one letter and one number' }
              })}
              placeholder='Your password here...'
            />
            { errors.password && <small className="text-red-500">{errors?.password?.message}</small> }
          </FormControl>

          <div className="mt-5">
            <ButtonLogin type='submit' text={isLoading ? 'Loading...' : 'Register'} variant='bg-violet-500 hover:bg-violet-600 text-white' />
          </div>
        </form>
      </div>
      <div className="mb-3 text-slate-600">
        <span className="pr-4">-----------------</span>
        <span className="text-center mb-3">Or login with</span>
        <span className="pl-4">-----------------</span>
      </div>
      <ButtonLogin
        onClick={googleLoginHendler}
      >
        <FcGoogle />
        Login with Google
      </ButtonLogin>

      <div className="flex justify-center mt-5">
        <span className="text-slate-600 pr-2">Already have an account?</span>
        <Link to='/user/login' className="text-violet-500 font-semibold">Login</Link>
      </div>
    </>
  )
}

export default Register
