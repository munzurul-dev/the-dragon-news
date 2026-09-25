import { Outlet, useNavigation } from "react-router";
import { useContext } from "react";

import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import NavBar from "../Components/NavBar";
import RightSide from "../Components/HomeLayout/RightSide";
import LeftSide from "../Components/HomeLayout/LeftSide";

import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../Components/Loading";

const HomeLayout = () => {
  const { loading } = useContext(AuthContext);
  const { state } = useNavigation();
  return loading ? (
    <Loading />
  ) : (
    <div>
      <header>
        <Header />
        <section>
          <LatestNews />
        </section>

        <nav>
          <NavBar />
        </nav>
      </header>

      <main className="w-11/12 mx-auto grid grid-cols-1 gap-4 p-2 lg:grid-cols-12">
        <aside className="lg:col-span-3 lg:sticky lg:top-0 lg:h-fit">
          <LeftSide />
        </aside>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:contents">
          <section className="md:col-span-2 lg:col-span-6">
            {state == "loading" ? <Loading></Loading> : <Outlet />}
          </section>

          <aside className="md:col-span-1 lg:col-span-3 lg:sticky lg:top-0 lg:h-fit">
            <RightSide />
          </aside>
        </div>
      </main>
    </div>
  );
};

export default HomeLayout;
