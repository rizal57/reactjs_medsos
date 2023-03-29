import { Feed, BoxCreate } from "../../components"


const Home = () => {
  return (
    <div className='w-full'>
      <div className="w-full h-[70px] bg-white/40 backdrop-blur-md flex items-center pl-4 mb-4 sticky top-0">
        <h1 className="font-semibold">Home</h1>
      </div>

      <div className='lg:px-4 md:px-2 hide-scrollbar'>
        <BoxCreate />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
      </div>
    </div>
  )
}

export default Home
