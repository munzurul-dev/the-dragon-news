import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router";


const NewsDetailsCard = ({news}) => {
    //console.log(news);
    const {image_url,title,details,category_id}= news
    return (
        <div className="space-y-5 p-5 border border-gray-200 rounded-2xl mt-5 ">
            <img className="w-full h-fit object-cover rounded-2xl  " src={image_url} alt={title}/>
            <h2 className="text-2xl font-bold ">{title}</h2>
            <p className="text-xl text-accent">{details}</p>
            <Link className="bg-secondary text-white flex items-center font-semibold text-md btn rounded-xl" to={`/categoryNews/${category_id}`}> <GoArrowLeft size={20}></GoArrowLeft> <span>All news in this category</span></Link>
        </div>
    );
};

export default NewsDetailsCard;