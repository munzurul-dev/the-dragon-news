import { format } from "date-fns";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="w-11/12 mx-auto p-2 py-4 flex flex-col justify-center items-center gap-4">
      <img className="w-100 " src={logo} alt="" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p className="font-semibold text-accent">{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
    </div>
  );
};

export default Header;
