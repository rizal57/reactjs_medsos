import { BiSmile } from "react-icons/bi";
import { AiOutlineFileGif } from "react-icons/ai"
import { RiGalleryFill } from "react-icons/ri";
import { GoLocation } from "react-icons/go";
import { ButtonPrimary } from "../button";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const BoxCreate = () => {
  const { authUser } = useContext(AuthContext)

  return (
    <div className="w-full px-4 mb-4">
      <div className="p-4 rounded-lg bg-white shadow-md">
        <div className="flex gap-3">
          <img src={authUser?.photoURL} alt="User Image" className="w-10 h-10 rounded-full" />

          <div className="w-full">
            <textarea name="post" id="post" className="resize-none outline-none border-none w-full placeholder:text-xl" placeholder="What's happening?"></textarea>

            <div className="flex justify-between items-center text-teal-500 text-lg md:text-xl mt-3">
              <div className="flex gap-4 md:gap-6">
                <div className="cursor-pointer relative">
                  <RiGalleryFill />
                </div>
                <div className="cursor-pointer relative">
                  <AiOutlineFileGif />
                </div>
                <div className="cursor-pointer relative">
                  <BiSmile />
                </div>
                <div className="cursor-pointer relative">
                  <GoLocation />
                </div>
              </div>

              <div>
                <ButtonPrimary text='Post' />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoxCreate
