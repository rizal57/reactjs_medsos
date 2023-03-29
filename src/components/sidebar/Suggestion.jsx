import { Link } from "react-router-dom"

const Suggestion = () => {
  return (
    <div className="px-4 pb-14 mt-4 overflow-y-scroll hide-scrollbar">
      <h1 className="font-semibold text-lg mb-4 sticky top-0 bg-white">Suggestions for you</h1>

      <div className="mb-3">
        <div className="flex items-center gap-2">
          <div>
            <img src="https://picsum.photos/300/300" alt="User Image" className="w-10 h-10 rounded-full" />
          </div>
          <div>
            <h3 className="font-semibold">Another Name</h3>
            <h5 className="text-sm text-slate-500">@username</h5>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <div className="flex items-center gap-2">
          <div>
            <img src="https://picsum.photos/300/300" alt="User Image" className="w-10 h-10 rounded-full" />
          </div>
          <div>
            <h3 className="font-semibold">Another Name</h3>
            <h5 className="text-sm text-slate-500">@username</h5>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <div className="flex items-center gap-2">
          <div>
            <img src="https://picsum.photos/300/300" alt="User Image" className="w-10 h-10 rounded-full" />
          </div>
          <div>
            <h3 className="font-semibold">Another Name</h3>
            <h5 className="text-sm text-slate-500">@username</h5>
          </div>
        </div>
      </div>

      <Link to='connect' className="text-teal-500 py-4 px-3 w-full flex rounded-lg hover:bg-teal-100 transition duration-300 mt-4">
        Show More
      </Link>
    </div>
  )
}

export default Suggestion
