import { Link, useLoaderData, useParams } from "react-router";
import { ArrowLeft } from "lucide-react";

const NewsDetails = () => {
  const news = useLoaderData();
  const { id } = useParams();
  const singleNews = news.find((single) => single.id === id);
  console.log(singleNews);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Main details */}
      <div className="lg:col-span-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-5">Dragon News</h2>

        <div className="border border-gray-200 rounded-sm p-5">
          <img
            src={singleNews.image_url}
            alt={singleNews.title}
            className="w-full h-96 object-cover rounded-sm"
          />
          <h1 className="mt-6 text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
            {singleNews.title}
          </h1>
          <p className="mt-5 text-gray-600 leading-relaxed">
           {singleNews.details}
          </p>

          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 bg-brand text-white bg-pink-700 font-semibold px-6 py-3 rounded-sm hover:opacity-90 transition"
          >
            <ArrowLeft className="w-5 h-5" /> All news in this category
          </Link>
        </div>

        {/* Editors Insight */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Editors Insight</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {news.slice(15,18).map((item, idx) => (
              <div key={idx}>
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-sm bg-gray-200"
                />
                <h3 className="mt-3 font-bold text-gray-900 leading-snug">{item.title}</h3>
                <p className="mt-3 text-sm text-gray-500 flex items-center gap-1">
                  📅 {item.author.published_date.slice(0,10)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
