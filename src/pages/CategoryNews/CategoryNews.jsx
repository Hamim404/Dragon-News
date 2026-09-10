import { useLoaderData, useParams } from "react-router";
import NewsCard from "../../components/NewsCard/NewsCard";
const categoryNewsData = (id, newsData) => {
  if (id == "0") {
    return newsData;
  } else if (id == "1") {
    return newsData.filter((ctgNews) => ctgNews.others?.is_today_pick === true);
  } else {
    return newsData.filter((ctgNews) => ctgNews.category_id == id);
  }
};

const CategoryNews = () => {
  const newsData = useLoaderData();
  const { id } = useParams();
  //   let categoryNews = [];

  const categoryNews = categoryNewsData(id, newsData);
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-5">
        Total News Found {categoryNews.length}
      </h2>
      {categoryNews.map((news) => (
        <NewsCard key={news.id} news={news} />
      ))}
    </section>
  );
};

export default CategoryNews;
