import { Outlet } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import NavBar from "../Components/NavBar";
import RightSide from "../Components/HomeLayout/RightSide";
import LeftSide from "../Components/HomeLayout/LeftSide";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section>
          <LatestNews></LatestNews>
        </section>
        <nav>
          <NavBar></NavBar>
        </nav>
      </header>
      <main className="w-11/12 mx-auto gap-4 grid grid-cols-12 p-2">
        <aside className="col-span-3">
          <LeftSide></LeftSide>
        </aside>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightSide></RightSide>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
