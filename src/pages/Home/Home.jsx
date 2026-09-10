import CategorySidebar from "../../components/CategorySidebar/CategorySidebar.jsx"
import NewsFeed from "../../components/NewsFeed/NewsFeed.jsx"
import RightSidebar from "../../components/RightSidebar/RightSidebar.jsx"

const Home = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Left: categories */}
      <div className="lg:col-span-3">
        <CategorySidebar />
      </div>

      {/* Center: news feed */}
      <div className="lg:col-span-6">
        <NewsFeed />
      </div>

      {/* Right: login / socials / q-zone */}
      <div className="lg:col-span-3">
        <RightSidebar />
      </div>
    </div>
  )
}

export default Home
