import { use } from "react";
import { NavLink } from "react-router";

const categoriesPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoriesPromise);

  return (
    <div>
      <h1 className="font-bold">All Categories ({categories.length})</h1>
      <div className="grid grid-cols-1 mt-5 gap-3">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`/categoryNews/${category.id}`}
            className={({ isActive }) =>
              `${isActive ? "bg-base-200 btn" : "text-accent"} bg-[#33333309] p-4 font-black`
            }
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
