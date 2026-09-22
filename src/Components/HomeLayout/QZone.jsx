import swimming from "../../assets/swimming.png";
import classImage from "../../assets/class.png";
import playGround from "../../assets/playground.png"
const QZone = () => {
  return (
    <div className="bg-base-200 p-4 rounded-2xl mt-5">
      <h2 className="text-2xl text-accent font-bold mb-5">Q-Zone</h2>
      <div className=" p-4 grid grid-cols-1  items-center gap-5">
        <img className="w-full" src={swimming} alt="Swimming" />
        <img className="w-full" src={classImage}alt="Class" />
        <img className="w-full" src={playGround} alt="Play Ground" />
      </div>
    </div>
  );
};

export default QZone;
