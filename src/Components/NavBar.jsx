import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  //console.log(user?.photoURL);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert(" Sign-out successful.");
      })
      .catch(() => {
       // console.log(error.message);
      });
    //console.log("User try to LogOut")
  };
  return (
    <div className="flex w-11/12 mx-auto py-5 md:px-2 justify-between">
      <div className="hidden md:flex">
        <p>{user?.email}</p>
      </div>
      <div className="flex md:gap-4 gap-2 items-center text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/info/about">About</NavLink>
        <NavLink to="/info/career">Career</NavLink>
      </div>
      <div className="flex gap-2 items-center">
        <img
          className="md:w-10 md:h-10 w-8 h-8 rounded-full object-cover"
          src={user?.photoURL || userIcon}
          alt="User"
          referrerPolicy="no-referrer"
        />
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn btn-primary md:py-4 md:px-10 px-6 "
          >
            {" "}
            LogOut
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="btn btn-primary md:py-4 md:px-10 px-6 "
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
