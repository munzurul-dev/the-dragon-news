import MarqueeModule from "react-fast-marquee";

const Marquee = MarqueeModule.default;

const LatestNews = () => {
  //console.log("Marquee:", Marquee);

  return (
    <div className=" flex w-11/12 mx-auto items-center bg-base-200 rounded-2xl  p-4 py-4 gap-4">
      <p className=" hidden md:flex btn-secondary btn py-5 px-8">Latest</p>

      <Marquee className="flex" pauseOnHover={true} speed={60}>
        <span className="ml-5 font-bold text-red-600">
          Breaking: Match Highlights: Germany vs Spain
        </span>

        <span className="ml-5 font-bold text-blue-600">
          Bangladesh announces new measures to improve public transport across
          major cities.
        </span>

        <span className="ml-5 font-bold text-purple-600">
          Germany introduces new digital services to make government processes
          faster and easier.
        </span>

        <span className="ml-5 font-bold text-gray-800">
          Apple unveils its latest technology updates with new features for
          users worldwide.
        </span>

        <span className="ml-5 font-bold text-orange-600">
          Heavy rainfall causes temporary disruption in several areas as
          authorities issue safety warnings.
        </span>

        <span className="ml-5 font-bold text-green-600">
          Global markets remain active as investors react to the latest economic
          developments.
        </span>
      </Marquee>
    </div>
  );
};

export default LatestNews;
