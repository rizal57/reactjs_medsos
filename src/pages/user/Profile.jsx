import { useContext } from "react"
import { ButtonPrimary, Feed } from "../../components"
import { AuthContext } from "../../context/AuthContext"
import { NoPoto } from "../../assets"
import { NavLink } from "react-router-dom"
import { useState } from "react"

const Profile = () => {
  const [state, setState] = useState('posts')
  const {authUser} = useContext(AuthContext)

  return (
    <>
      <div className="relative w-full">
        <div className="h-[300px] overflow-hidden object-cover bg-cover">
          <img src="https://picsum.photos/500/600" alt="User Cover" className="w-full object-cover" />
        </div>
        <div className="flex justify-end mt-4">
          <ButtonPrimary text='Edit Profile' />
        </div>
        {/* profile image */}
        <div className="absolute -bottom-4 left-5 w-24 h-24 rounded-full overflow-hidden border-4 border-white">
          <img src={authUser.photoURL ? authUser.photoURL : NoPoto} alt="Profile image" className="object-cover" />
        </div>
      </div>
      <div className="mt-3 px-4">
        <h3 className="font-semibold text-lg">{authUser.displayName ? authUser.displayName : authUser.email}</h3>
        <h5 className="text-slate-500 text-base">@{authUser?.displayName ? authUser?.displayName.replace(/ /g,"_").slice(0,9) : authUser?.email.replace(/ /g,"_").slice(0,9)}</h5>
      </div>

      <div className="mt-5 px-4">
        <div className="flex items-center justify-center gap-5 border-y py-2">
          <button onClick={() => setState('posts')} className={`font-semibold ${state === 'posts' && 'text-violet-500'}`}>Posts</button>
          <button onClick={() => setState('likes')} className={`font-semibold ${state === 'likes' && 'text-violet-500'}`}>Likes</button>
        </div>
        <div className="mt-3">
          {state === 'posts' ? <Feed /> : <h1 className="text-center text-2xl font-bold">Coming Soon</h1>}
        </div>
      </div>
    </>
  )
}

export default Profile
