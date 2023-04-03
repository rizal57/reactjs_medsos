import { Link } from "react-router-dom"
import { BsThreeDots, BsChat, BsHeart, BsBookmark, BsShare } from "react-icons/bs";

const Feed = () => {
  return (
    <>
      <div className="px-4 py-2 bg-white shadow-md rounded-lg mx-4 mb-4">
        <div className="flex justify-between items-center">
          <div className="flex">
            <div className="flex gap-2 items-center">
              <img
                src="https://picsum.photos/200/200"
                alt="user image"
                className="w-10 h-10 rounded-full"
              />
              <div className="flex flex-col mr-3">
                <Link to='/profile' className="font-semibold">M. Fahrur Rizal</Link>
                <Link to='/profile' className="text-sm text-slate-500">@username</Link>
              </div>
            </div>
            &middot;
            <div className="ml-3">
              <span className="text-slate-500 text-sm">just now</span>
            </div>
          </div>

          <div>
            <BsThreeDots />
          </div>
        </div>

        <div className="mt-2">
          <p className="text-slate-600 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque unde aliquid commodi nemo adipisci deserunt optio perspiciatis cupiditate maxime vero.
          </p>
        </div>

        <div className="w-full">
          <img src="https://picsum.photos/500/600" alt="Feed image" className="w-full rounded-lg mt-3 object-cover" />
        </div>

        <div className="mt-4 flex justify-between gap-3 p-2">
          <div className="flex items-center md:gap-3 gap-2">
            <BsHeart />
            <span className="md:text-sm text-xs flex gap-2">
              30.5k <span className="hidden md:block">Like</span>
            </span>
          </div>
          <div className="flex items-center md:gap-3 gap-2">
            <BsChat />
            <span className="md:text-sm text-xs flex gap-2">
              50 <span className="hidden md:block">Comment</span>
            </span>
          </div>
          <div className="flex items-center md:gap-3 gap-2">
            <BsShare />
            <span className="md:text-sm text-xs flex gap-2">
              120 <span className="hidden md:block">Share</span>
            </span>
          </div>
          <div className="flex items-center md:gap-3 gap-2">
            <BsBookmark />
            <span className="md:text-sm text-xs flex gap-2">
              15 <span className="hidden md:block">Saved</span>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Feed
