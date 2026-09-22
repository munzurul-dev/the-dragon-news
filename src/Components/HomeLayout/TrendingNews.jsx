import { use } from "react";
import TrendingNewsCard from "./TrendingNewsCard";

const trendingPromise = fetch("/trending.json").then((res) => res.json());

const TrendingNews = () => {
  const trendingNews = use(trendingPromise);

  return (
    <div>
  <div className="mt-5 grid grid-cols-1 gap-5">
        {trendingNews.map((news) => (
          <TrendingNewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default TrendingNews;
