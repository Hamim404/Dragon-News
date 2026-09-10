import { Link } from "react-router";
import { Bookmark, Share2, Star, Eye } from "lucide-react";

const NewsCard = ({ news }) => {
  const { id, title, author, thumbnail_url, details, rating, total_view } =
    news;

  return (
    <div className="border border-gray-200 rounded-sm mb-8">
      {/* card header: author + actions */}
      <div className="flex items-center justify-between bg-gray-100 px-4 py-4 rounded-t-sm">
        <div className="flex items-center gap-3">
          <img
            src={author?.img || "https://picsum.photos/seed/author/60/60"}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h4 className="font-bold text-gray-900">{author?.name}</h4>
            <p className="text-sm text-gray-500">{author?.published_date.slice(0,10)}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-gray-500">
          <button aria-label="Bookmark">
            <Bookmark className="w-5 h-5" />
          </button>
          <button aria-label="Share">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* card body */}
      <div className="px-4 py-5">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug mb-4">
          {title}
        </h2>

        <img
          src={thumbnail_url || "/placeholder.svg"}
          alt={title}
          className="w-full h-72 object-cover rounded-sm mb-4"
        />

        <p className="text-gray-600 leading-relaxed">
          {details?.length > 200 ? (
            <>
              {details.slice(0, 200)}...
              <Link
                to={`/news/${id}`}
                className="text-brand font-medium ml-1 text-orange-500"
              >
                Read More
              </Link>
            </>
          ) : (
            details
          )}
        </p>
      </div>

      {/* card footer: rating + views */}
      <div className="flex items-center justify-between border-t border-gray-200 px-4 py-4">
        <div className="flex items-center gap-2 text-orange-500">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${rating.number > i && "fill-orange-500"}`}
            />
          ))}
          <span className="text-gray-700 font-semibold ml-2">
            {rating.number}
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Eye className="w-5 h-5" />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
