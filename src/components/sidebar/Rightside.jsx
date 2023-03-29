import { Footer } from "../footer"
import Suggestion from "./Suggestion"
import TrendingFeed from "./TrendingFeed"

const Rightside = () => {
  return (
    <div className="flex flex-col sticky top-0 h-screen">
      <TrendingFeed />

      <Suggestion />

      <Footer />
    </div>
  )
}

export default Rightside
