import { BiSmile } from "react-icons/bi";
import { AiOutlineFileGif } from "react-icons/ai"
import { RiGalleryFill } from "react-icons/ri";
import { GoLocation } from "react-icons/go";
import { ButtonPrimary } from "../button";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { NoPoto } from '../../assets'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { useState } from "react";

const BoxCreate = () => {
  const [post, setPost] = useState('')
  const [showEmoji, setShowEmoji] = useState(false)

  const { authUser } = useContext(AuthContext)

  const onChange = (e) => {
    setPost(e.target.value)
  }

  const showEmojiHendler = () => {
    setShowEmoji(!showEmoji)
  }

  const addEmoji = (e) => {
    let sym = e.unified.split("-")
    let codesArray = []
    sym.forEach((el) => codesArray.push("0x" + el))
    let emoji = String.fromCodePoint(...codesArray)
    setPost(post + emoji)
  }

  return (
    <div className="w-full px-4 mb-4">
      <div className="p-4 rounded-lg bg-white shadow-md">
        <div className="flex gap-3">
          <img src={authUser?.photoURL ? authUser?.photoURL : NoPoto} alt="User Image" className="w-10 h-10 rounded-full" />

          <div className="w-full">
            <textarea name="post" id="post" value={post} onChange={onChange} className="resize-none outline-none border-none w-full placeholder:text-xl" placeholder="What's happening?"></textarea>

            <div className="flex justify-between items-center text-violet-500 text-lg md:text-xl mt-3">
              <div className="flex gap-4 md:gap-6">
                <div className="cursor-pointer relative">
                  <RiGalleryFill />
                </div>
                <div className="cursor-pointer relative">
                  <AiOutlineFileGif />
                </div>
                <div className="cursor-pointer relative">
                  {/* emoji */}
                  <div className={`absolute top-10 -left-5 transition-all duration-300 ${showEmoji ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 translate-y-5'}`}>
                    <Picker
                      onEmojiSelect={addEmoji}
                      data={data}
                    />
                  </div>
                  <BiSmile onClick={showEmojiHendler} />
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
