import { useLoaderData } from "react-router"
import NewsCard from "../NewsCard/NewsCard.jsx"

const NewsFeed = () => {
  const demoNews = useLoaderData();
  console.log(demoNews);
  
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-5">Dragon News Home</h2>
      {demoNews.map((news) => (
        <NewsCard key={news._id} news={news} />
      ))}
    </section>
  )
}

export default NewsFeed
