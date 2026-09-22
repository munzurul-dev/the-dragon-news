import FindUs from "./FindUs";
import QZone from "./QZone";
import SocialLogin from "./SocialLogin";
import SponsorZone from "./SponsorZone";

const RightSide = () => {
  return (
    <div className="mt-5">
      <h1 className="font-bold text-xl">Login With</h1>
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
      <QZone></QZone>
      <SponsorZone></SponsorZone>
    </div>
  );
};

export default RightSide;
