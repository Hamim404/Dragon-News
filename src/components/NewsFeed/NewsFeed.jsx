import NewsCard from "../NewsCard/NewsCard.jsx";
import { use } from "react";
const newsPromise = fetch("/news.json").then((res) => res.json());
const NewsFeed = () => {
  const demoNews = use(newsPromise);
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-5">
        Dragon News Home
      </h2>
      {demoNews.map((news) => (
        <NewsCard key={news.id} news={news} />
      ))}
    </section>
  );
};

export default NewsFeed;
