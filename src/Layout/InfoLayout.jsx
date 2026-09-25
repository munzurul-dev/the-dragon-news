import { Outlet, useNavigation } from "react-router";

import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Loading from "../Components/Loading";

const InfoLayout = () => {
     const { state } = useNavigation();
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <header className="w-full">
        <div className="w-11/12 max-w-7xl mx-auto">
          <Header />
        </div>

        <nav className="w-full">
          <NavBar />
        </nav>
      </header>

      <main className="w-full">
        <div className="w-11/12 max-w-7xl mx-auto py-4 sm:py-6 md:py-8 lg:py-10">
         {state == "loading"  ? <Loading></Loading> : <Outlet />}
        </div>
      </main>
    </div>
  );
};

export default InfoLayout;