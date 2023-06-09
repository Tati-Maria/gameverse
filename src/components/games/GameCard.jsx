/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import {HiStar} from "react-icons/hi"
import {SiIos} from "react-icons/si"
import {BsPlaystation, BsXbox, BsNintendoSwitch} from "react-icons/bs"
import {HiComputerDesktop} from "react-icons/hi2"
import LikeButton from "../ui/LikeButton"


const GameCard = ({
  id,
  name,
  rating,
  released,
  background_image,
  metric,
  parent_platforms,
}) => {

  const platforms = parent_platforms?.map((platform) => {
    switch (platform.platform.slug) {
      case "pc":
        return <HiComputerDesktop key={platform.platform.id} className="inline-block text-gray-500" />
      case "playstation":
        return <BsPlaystation key={platform.platform.id} className="inline-block text-gray-500" />
      case "xbox":
        return <BsXbox key={platform.platform.id} className="inline-block text-gray-500" />
      case "ios":
        return <SiIos key={platform.platform.id} className="inline-block text-gray-500" />
      case "nintendo":
        return <BsNintendoSwitch key={platform.platform.id} className="inline-block text-gray-500" />
      default:
        return null
    }
  });


  //change colort of metric based on value
  const metricColor = () => {
    if (metric >= 75) {
      return "bg-green-500"
    } else if (metric >= 50) {
      return "bg-yellow-500"
    } else if (metric >= 25) {
      return "bg-red-500"
    } else {
      return "bg-gray-500"
    }
  }


  return (
    <div
    className="p-4 bg-gray-100 rounded-md shadow-lg overflow-hidden hover:shadow-md transition-shadow duration-300 ease-in-out dark:bg-gray-800 dark:text-white relative" 
    >
      <LikeButton game={{id, name, rating, released, background_image}} />
      <Link 
      to={`/games/${id}`}
      className="flex flex-col space-y-4"
      >
        <img 
        src={background_image} 
        alt={name}
        className="w-full h-48 object-cover rounded-md" 
        />
        <div
        className="flex flex-col space-y-1"
        >
          <div className="flex space-x-2">
            {platforms && platforms}
          </div>
          <div className="flex justify-between items-center">
            <h4>
              {name && name.length > 20 ? `${name.substring(0, 35)}...` : name}
            </h4>
            <div className={`rounded-full w-6 h-6 flex justify-center items-center ${metricColor()}`}>
              <span className="text-xs">{metric}</span>
            </div>
          </div>
          <div className="text-gray-500 flex flex-col dark:text-gray-400">
            <small>Release: {released}</small>
            <span>
              <HiStar className="inline-block text-yellow-500" />
              <small>{rating}</small>
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default GameCard