import { Bookmark, Share2, Eye } from "lucide-react";

const TrendingNewsCard = ({ news }) => {
  const {
    title,
    author,
    image_url,
    details,
    rating,
    total_view,
  } = news;

  const date = new Date(author.published_date);

  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="w-full rounded-lg border border-gray-200 bg-white p-4">

      
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="h-10 w-10 rounded-full object-cover"
          />

          <div>
            <h3 className="font-semibold text-gray-800">
              {author.name}
            </h3>

            <p className="text-xs text-gray-500">
              {formattedDate}
            </p>
          </div>
        </div>

        
        <div className="flex items-center gap-4 text-gray-500">
          <Bookmark size={19} />
          <Share2 size={19} />
        </div>
      </div>

      
      <h2 className="mt-5 text-xl font-bold leading-7 text-gray-800">
        {title}
      </h2>

      
      <img
        src={image_url}
        alt={title}
        className="mt-4 h-56 w-full rounded-md object-cover"
      />

   
      <p className="mt-5 line-clamp-4 text-sm leading-6 text-gray-500">
        {details}
      </p>

     
      <button className="mt-1 text-sm font-semibold text-orange-500">
        Read More
      </button>

     
      <div className="my-4 border-t border-gray-200"></div>

   
      <div className="flex items-center justify-between">

     
        <div className="flex items-center gap-2">
          <div className="flex gap-1 text-orange-400">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star}>★</span>
            ))}
          </div>

          <span className="text-sm text-gray-600">
            {rating.number}
          </span>
        </div>

        
        <div className="flex items-center gap-2 text-gray-500">
          <Eye size={18} />

          <span className="text-sm">
            {total_view}
          </span>
        </div>
      </div>

    </div>
  );
};

export default TrendingNewsCard;