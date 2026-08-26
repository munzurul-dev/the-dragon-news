import { NavLink } from "react-router";
import userIcon from "../assets/user.png";

const NavBar = () => {
  return (
    <div className="flex w-11/12 mx-auto py-5 md:px-2 justify-between">
      <div className="hidden md:flex"></div>
      <div className="flex md:gap-4 gap-2 items-center text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex gap-2 items-center">
        <img className="md:w-10 w-8" src={userIcon} alt="" />
        <button className="btn btn-primary md:py-4 md:px-10 px-6 ">Login</button>
      </div>
    </div>
  );
};

export default NavBar;
