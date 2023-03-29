import NavigationLink from "../NavigationLink"
import { GoHome } from "react-icons/go";
import { CiBookmark } from "react-icons/ci";
import { BiMessageRounded } from "react-icons/bi";
import { IoIosStats } from "react-icons/io";
import { AiOutlineSetting, AiOutlineComment } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BsList, BsPower, BsThreeDots } from "react-icons/bs";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const [moreToggle, setMoreToggle] = useState(false)
  const { dispatch, authUser } = useContext(AuthContext)

  const signOutHendler = async () => {
    signOut(auth)
      .then(() => {
        dispatch({type: 'LOGOUT'})
        localStorage.clear();
      }).catch(err => {
        console.error(err.message)
      })
  }

  const navigations = [
    {
      url: '/',
      text: 'Home',
      icon: GoHome
    },
    {
      url: '/favorite',
      text: 'Favorite',
      icon: CiBookmark
    },
    {
      url: '/message',
      text: 'Message',
      icon: BiMessageRounded
    },
    {
      url: '/stats',
      text: 'Stats',
      icon: IoIosStats
    },
    {
      url: '/setting',
      text: 'Setting',
      icon: AiOutlineSetting
    },

  ]

  const moreToggleHendler = () => {
    setMoreToggle(!moreToggle)
  }

  return (
    <div className="bg-white shadow-md h-screen fixed left-0 top-0 w-[70px] md:w-[300px] lg:w-[350px] py-2 flex flex-col justify-between">
        <div>
          {/* logo */}
          <div className="logo mb-8 w-full md:pl-8 lg:pl-12">
            <h1 className="font-bold text-violet-500 text-lg md:text-xl text-center md:text-start">Logo.</h1>
          </div>

          {/* user */}
          <div className="relative w-full pt-2 pb-2 lg:pb-5 lg:pl-4 md:pr-2 flex flex-col items-center md:items-start border-b">
            <div className="mb-4 md:px-2 md:flex md:gap-3 md:flex-col md:items-center md:w-full">
              <Link to='/profile'>
                <img
                  src={authUser?.photoURL}
                  alt="user image"
                  className="w-10 h-10 md:w-14 md:h-14 rounded-full flex-shrink-0"
                />
              </Link>
              <div className="hidden text-center md:flex md:flex-col">
                <Link to='/profile' className="font-semibold">{authUser?.displayName}</Link>
                <Link to='/profile' className="text-sm text-slate-500">@{authUser?.displayName.replace(/ /g,"_").slice(0,9)}</Link>
              </div>
            </div>

            <div className="hidden md:grid grid-cols-3 md:w-full gap-3 px-2">
              <div className="flex flex-col items-center">
                <h3 className="font-semibold text-lg">500</h3>
                <span className="text-slate-500 text-sm uppercase">POSTS</span>
              </div>

              <div className="flex flex-col items-center">
                <h3 className="font-semibold text-lg">999k</h3>
                <span className="text-slate-500 text-sm uppercase">FOLLOWERS</span>
              </div>

              <div className="flex flex-col items-center">
                <h3 className="font-semibold text-lg">1</h3>
                <span className="text-slate-500 text-sm uppercase">FOLLOWING</span>
              </div>

            </div>
          </div>

          {/* navigation */}
          <div className="w-full h-full pt-2 md:pt-5 md:pl-2 lg:pl-4 overflow-y-scroll hide-scrollbar">
            <aside className="sidebar flex flex-col items-center md:items-start">
              { navigations.map((nav, i) => (
                  <NavigationLink key={i} url={nav.url} text={nav.text} Icon={<nav.icon />} />
                ))
              }
              <div className="relative w-full flex justify-center">
                {/* more menu */}
                <div className={`${moreToggle ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 translate-y-5'} absolute pl-2 md:pl-0 transition-all duration-300 w-full shadow-lg -top-24 bg-white flex flex-col rounded-lg`}>
                  <NavigationLink url={'/topic'} text={'Topics'} Icon={<AiOutlineComment />} />
                  <NavigationLink url={'/list'} text={'List'} Icon={<BsList />} />
                </div>

                <button
                  onClick={moreToggleHendler}
                  className="hover:text-violet-500 h-12 w-12 md:object-contain md:w-full md:h-full md:py-2 md:px-4 md:mb-2 inline-flex items-center gap-3 md:justify-start justify-center transition duration-300"
                >
                  <span className="text-2xl">
                    <BsThreeDots />
                  </span>

                  <span className="hidden md:block">
                    More
                  </span>
                </button>
              </div>
            </aside>
          </div>
        </div>

        <div className="w-full lg:pl-4 md:pl-2 flex flex-col justify-between items-center md:items-start">
          <button
            onClick={signOutHendler}
            className="hover:text-violet-500 h-12 w-12 md:object-contain md:w-full md:h-full md:py-2 md:px-4 md:mb-2 inline-flex items-center gap-3 md:justify-start justify-center transition duration-300">
              <BsPower fontSize={24} />
              <span className="hidden md:block">Logout</span>
          </button>
        </div>
      </div>
  )
}

export default Navbar
