import { Bookmark, Share2, Eye } from "lucide-react";

const NewsCard = ({ news }) => {
  const { title, author, image_url, details, rating, total_view } = news;

  const date = new Date(author.published_date);

  const formattedDate = date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <div className="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
    
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="h-10 w-10 rounded-full object-cover"
          />

          <div>
            <h4 className="text-sm font-semibold text-gray-800">
              {author.name}
            </h4>

            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-gray-500">
          <button>
            <Bookmark size={18} />
          </button>

          <button>
            <Share2 size={18} />
          </button>
        </div>
      </div>

     
      <h2 className="mt-5 text-lg font-bold leading-7 text-gray-800">
        {title}
      </h2>

     
      <img
        src={image_url}
        alt={title}
        className="mt-4 h-52 w-full rounded-md object-cover"
      />

     
      <p className="mt-5 line-clamp-4 text-sm leading-6 text-gray-500">
        {details}
      </p>

      
      <button className="mt-1 text-sm font-semibold text-orange-500 hover:text-orange-600">
        Read More
      </button>

      <div className="my-4 border-t border-gray-200"></div>

     
      <div className="flex items-center justify-between">
       
        <div className="flex items-center gap-1">
          <div className="flex text-orange-400">
            {[...Array(5)].map((_, index) => (
              <span key={index}>★</span>
            ))}
          </div>

          <span className="ml-2 text-sm text-gray-600">{rating.number}.9</span>
        </div>

        
        <div className="flex items-center gap-2 text-gray-500">
          <Eye size={17} />

          <span className="text-sm">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
