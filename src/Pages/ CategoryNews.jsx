import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/HomeLayout/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [filterNews,setFilterNews]  = useState([])  ;
 // console.log(filterNews)
 useEffect( ()=> {
  if(id == "0"){
    //console.log("boom")
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFilterNews(data);
    return;
  } else if( id == "1"){
    const filterNews = data.filter( (news)=> news.others.is_today_pick == true);
    setFilterNews(filterNews);
    return;
  } else{ 
    const filterNews = data.filter( (news)=> news.category_id == id);
    setFilterNews(filterNews);
  }
 },[id, data])

  return  (
    <div className="grid grid-cols-1 gap-5">
      {filterNews.map((news) => (
        <NewsCard
          key={news.id}
          news={news}
        />
      ))}
    </div>
  );
};

export default CategoryNews;
