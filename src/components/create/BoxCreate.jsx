import { BiSmile } from "react-icons/bi";
import { AiOutlineFileGif } from "react-icons/ai"
import { RiGalleryFill } from "react-icons/ri";
import { GoLocation } from "react-icons/go";
import { MdClose } from "react-icons/md";
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
  const [previewImage, setPreviewImage] = useState(null)

  const { authUser } = useContext(AuthContext)

  const onChange = (e) => {
    setPost(e.target.value)
  }

  const handlePreviewImage = (e) => {
    const file = e.target.files[0]

    const reader = new FileReader()
    reader.onload = (res) => {
      setPreviewImage(res.target.result)
    }
    reader.readAsDataURL(file)
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
          <img
            src={authUser?.photoURL ? authUser?.photoURL : NoPoto}
            alt="User Image"
            className="w-10 h-10 rounded-full"
          />

          <div className="w-full">
            <textarea
              name="post"
              id="post"
              value={post}
              onChange={onChange}
              className="resize-none outline-none border-none w-full placeholder:text-xl"
              placeholder="What's happening?"
            ></textarea>
            {previewImage && (
              <div className="my-4 relative w-full md:w-[250px]">
                <div onClick={() => setPreviewImage(null)} className="cursor-pointer transition duration-300 bg-slate-800/60 hover:bg-slate-800 text-white w-6 h-6 flex items-center justify-center rounded-full absolute top-1 right-1">
                  <MdClose />
                </div>
                <img src={previewImage} alt="Image Preview" className="w-full object-cover rounded-lg" />
              </div>
            )}

            <div className="flex justify-between items-center text-violet-500 text-lg md:text-xl mt-3">
              <div className="flex gap-4 md:gap-6">
                {/* image */}
                <div className="relative">
                  <input
                    type="file"
                    id='img'
                    className="hidden"
                    accept="image/jpg, image/jpeg, image/png, image/gif"
                    onChange={handlePreviewImage}
                  />

                  <label htmlFor="img" className="cursor-pointer">
                    <RiGalleryFill />
                  </label>
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
                <ButtonPrimary disabled={!post} opacity={`${!post && 'opacity-50'}`} text='Post' />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoxCreate
