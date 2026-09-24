import { Outlet } from "react-router";
import NavBar from "../Components/NavBar";
import Login from "../Pages/Login";
import Resgister from "../Pages/Resgister";

const AuthLayout = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <NavBar></NavBar>
      <div className="flex justify-center items-center mx-auto mt-20  md:mt-40 p-4 md:p-0">
        <Outlet>
          <Login></Login>
          <Resgister></Resgister>
        </Outlet>
      </div>
    </div>
  );
};

export default AuthLayout;
