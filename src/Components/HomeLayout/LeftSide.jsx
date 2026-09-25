import Categories from "./Categories";
import TrendingNews from "./TrendingNews";

const LeftSide = () => {
  return (
    <div>
      <Categories></Categories>
      <div className="pr-8 hidden lg:flex">
        {" "}
        <TrendingNews></TrendingNews>
      </div>
    </div>
  );
};

export default LeftSide;
