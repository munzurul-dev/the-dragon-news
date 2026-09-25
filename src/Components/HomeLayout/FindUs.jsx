import fbIcon from "../../assets/fb.png";
import twitter from "../../assets/twitter.png"
import instagram from "../../assets/instagram.png"
const FindUs = () => {
  return (
    <div className="mt-10">
      <h2 className="text-xl mb-4 text-accent font-bold">Find Us On</h2>
      <div className="border-2 border-base-200 rounded-2xl">
        <p className=" w-full p-5 border-b border-base-200 ">
          <a className="flex items-center gap-4" target="_blank" href="https://www.facebook.com/profile.php?id=61594430067608">
            <img
              className="bg-base-200 rounded-full py-2 px-3 w-8  font-extrabold"
              src={fbIcon}
              alt=""
            />
            <span className="text-accent text-xl">Facbook</span>
          </a>
        </p>
        
        <p className=" w-full p-5 border-b border-base-200 ">
          <a className="flex items-center gap-4" target="_blank" href="https://x.com/Munzurul_Dev">
            <img
              className="bg-base-200 rounded-full py-3 px-2.5 w-10 font-extrabold"
              src={twitter}
              alt=""
            />
            <span className="text-accent text-xl">Twitter</span>
          </a>
        </p>
        <p className=" w-full p-5 border-b border-base-200 ">
          <a className="flex items-center gap-4" target="_blank" href="https://www.instagram.com/muhammadmunzurul?stkn=MW14ODdmYXFscXg5bw==">
            <img
              className="bg-base-200 rounded-full py-3 px-3 w-10 font-extrabold"
              src={instagram}
              alt=""
            />
            <span className="text-accent text-xl">Instagram</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default FindUs;
