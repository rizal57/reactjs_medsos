import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex items-center justify-center h-[10vh] md:h-screen bg-violet-400 w-full">
        <h1 className="font-bold text-violet-50 text-3xl md:text-5xl lg:text-7xl">Logo.</h1>
      </div>
      <div className="grid place-content-center bg-violet-50 h-[90vh] md:h-screen w-full">
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout
