import { use } from "react";
import FindUs from "./FindUs";
import QZone from "./QZone";
import SocialLogin from "./SocialLogin";
import SponsorZone from "./SponsorZone";
import { AuthContext } from "../../Provider/AuthProvider";

const RightSide = () => {
  const { user } = use(AuthContext);
  return (
    <div className="mt-5">
      <div className={user ? "hidden" : "flex flex-col"}>
        <h1 className="font-bold text-xl">Login With</h1>
        <SocialLogin></SocialLogin>
        
      </div>
      <FindUs></FindUs>
      <QZone></QZone>
      <SponsorZone></SponsorZone>
    </div>
  );
};

export default RightSide;
