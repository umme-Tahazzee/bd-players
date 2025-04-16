import { IoFlag } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Player = ({ player }) => {
  const { playerId, name, country, image, battingBowlingType, biddingPrice } =
    player;
  return (
    <div>
      {/* cards start */}
      <div className="max-w-sm mx-auto bg-white rounded-2xl 
      shadow-md overflow-hidden p-6 hover:shadow-xl transition-shadow ">
        <img
          className="w-full h-48 object-cover rounded-md"
          src={image}
          alt="name"
        />
        <div className="mt-4 font-semibold space-y-2">
          <div className="flex gap-2">
          <CgProfile className="mt-2"/>
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          </div>
          <div className="mt-2 flex gap-2 text-gray-600 text-sm">
            <IoFlag className="" />
            {country}
          </div>
          <hr className="text-slate-200" />
          <p className="font-semibold">
            <small>Rating</small>
          </p>
          <div className="flex justify-between">
            <p>
              <small>Left-Hand-Bat</small>
            </p>
            <span className="text-slate-300">
              <small>Left-Hand-Bat</small>
            </span>
          </div>
          <div className="flex justify-between">
          <p><small>Price: $1500000</small></p>
          <button className="px-2 rounded-md
           text-slate-500 bg-gray-300">
            <small> Choose Player</small>
          </button>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Player;
