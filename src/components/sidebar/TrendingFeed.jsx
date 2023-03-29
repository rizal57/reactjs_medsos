const TrendingFeed = () => {
  return (
    <div className="px-4 pb-4 mt-4 overflow-y-scroll hide-scrollbar">
      <h1 className="font-semibold text-lg mb-4 sticky top-0 bg-white">Trending Feeds</h1>

      <div className="flex flex-wrap gap-2">
        <img src="https://picsum.photos/500/500" alt="Trending Feed" className="w-32 h-32 rounded-lg object-cover" />
        <img src="https://picsum.photos/500/500" alt="Trending Feed" className="w-32 h-32 rounded-lg object-cover" />
        <img src="https://picsum.photos/500/500" alt="Trending Feed" className="w-32 h-32 rounded-lg object-cover" />
        <img src="https://picsum.photos/500/500" alt="Trending Feed" className="w-32 h-32 rounded-lg object-cover" />
      </div>
    </div>
  )
}

export default TrendingFeed
