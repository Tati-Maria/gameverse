/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { TbRating18Plus } from "react-icons/tb";
import { HiStar } from "react-icons/hi";
import { SiIos } from "react-icons/si";
import {
  BsPlaystation,
  BsXbox,
  BsNintendoSwitch,
  BsAndroid2,
  BsImageFill,
} from "react-icons/bs";
import { HiComputerDesktop } from "react-icons/hi2";
import LikeButton from "../ui/LikeButton";

const GameCard = ({
  id,
  name,
  rating,
  released,
  background_image,
  metric,
  parent_platforms,
  mature,
}) => {
  const platforms = parent_platforms?.map(platform => {
    switch (platform.platform.slug) {
      case "pc":
        return (
          <HiComputerDesktop
            key={platform.platform.id}
            className="inline-block text-gray-500"
          />
        );
      case "playstation":
        return (
          <BsPlaystation
            key={platform.platform.id}
            className="inline-block text-gray-500"
          />
        );
      case "xbox":
        return (
          <BsXbox
            key={platform.platform.id}
            className="inline-block text-gray-500"
          />
        );
      case "ios":
        return (
          <SiIos
            key={platform.platform.id}
            className="inline-block text-gray-500"
          />
        );
      case "nintendo":
        return (
          <BsNintendoSwitch
            key={platform.platform.id}
            className="inline-block text-gray-500"
          />
        );
      case "android":
        return (
          <BsAndroid2
            key={platform.platform.id}
            className="inline-block text-gray-500"
          />
        );
      default:
        return null;
    }
  });

  //change colort of metric based on value
  const metricColor = () => {
    if (metric >= 75) {
      return "bg-green-500";
    } else if (metric >= 50) {
      return "bg-yellow-500";
    } else if (metric >= 25) {
      return "bg-red-500";
    } else {
      return "bg-gray-200 dark:bg-gray-700 dark:text-gray-4";
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-lg overflow-hidden hover:shadow-md transition-shadow duration-300 ease-in-out dark:bg-gray-800 dark:text-white relative group">
      <LikeButton game={{ id, name, rating, released, background_image }} />
      <Link to={`/games/${id}`} className="flex flex-col space-y-4">
        {background_image ? (
          <figure className="relative h-48">
            <img
              src={background_image}
              alt={name}
              className="w-full h-full object-cover rounded-md"
            />
            {mature && (
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 justify-center items-center hidden group-hover:flex">
                <TbRating18Plus className="w-16 h-16 text-red-500" />
              </div>
            )}
          </figure>
        ) : (
          <div className="w-full h-48 bg-gray-300 rounded-md dark:bg-gray-700">
            <BsImageFill className="w-full h-full text-gray-500" />
          </div>
        )}
        <div className="flex flex-col space-y-1">
          <div className="flex space-x-2">{platforms && platforms}</div>
          <div className="flex justify-between items-center">
            <h4>
              {name && name.length > 20 ? `${name.substring(0, 20)}...` : name}
            </h4>
            <div
              className={`rounded-full w-6 h-6 flex justify-center items-center ${metricColor()}`}
            >
              <span className="text-xs">{metric}</span>
            </div>
          </div>
          <div className="text-gray-500 flex flex-col dark:text-gray-400">
            <small>Release: {released}</small>
            <span
              className={`flex items-center space-x-1 ${
                rating >= 4
                  ? "text-green-500"
                  : rating >= 3
                  ? "text-yellow-500"
                  : "text-red-500"
              } dark:text-gray-400`}
            >
              <HiStar className="inline-block text-yellow-500" />
              <small>{rating}</small>
              <small
              className={`inline-block md:hidden pl-3`}
              >
                {mature && <TbRating18Plus className=" text-red-500" size={18} />}
              </small>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default GameCard;
