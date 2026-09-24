import { useEffect, useState } from "react";
import {  useLoaderData, useParams } from "react-router";
import Header from "../Components/Header";
import RightSide from "../Components/HomeLayout/RightSide";
import NewsDetailsCard from "../Components/NewsDetailsCard";


const NewsDetails = () => {
    const newsData = useLoaderData();
    const {id }= useParams();
    const [news, setNews] = useState({});
    console.log(news)
    useEffect(()=>{
        const fiendNews = newsData.find((singleNews)=> singleNews.id == id);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setNews(fiendNews)
    },[newsData,id])
    return (
        <div className="w-11/12 mx-auto ">
           <Header></Header>
           <main className="grid grid-cols-12 gap-5">
            <section className="col-span-9" >
                <h2 className="font-bold text-2xl">Dragon News</h2>
                <NewsDetailsCard news={news}></NewsDetailsCard>
            </section>
            <aside className="col-span-3">
              <RightSide></RightSide>
            </aside>
           </main>
        </div>
    );
};

export default NewsDetails;