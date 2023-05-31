/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import {HiStar} from "react-icons/hi"
import {BsPlaystation, BsXbox} from "react-icons/bs"
import {HiComputerDesktop} from "react-icons/hi2"


const GameCard = ({
  id,
  name,
  rating,
  released,
  background_image,
  metric,
  parent_platforms,
}) => {

  const platforms = parent_platforms.map((platform) => {
    switch (platform.platform.slug) {
      case "pc":
        return <HiComputerDesktop key={platform.platform.id} className="inline-block text-gray-500" />
      case "playstation":
        return <BsPlaystation key={platform.platform.id} className="inline-block text-gray-500" />
      case "xbox":
        return <BsXbox key={platform.platform.id} className="inline-block text-gray-500" />
      default:
        return null
    }
  })


  return (
    <div
    className="p-4 bg-gray-100 rounded-md shadow-lg overflow-hidden hover:shadow-md transition-shadow duration-300 ease-in-out dark:bg-gray-800 dark:text-white" 
    >
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
            {platforms}
          </div>
          <div className="flex justify-between items-center">
            <h4>{name}</h4>
            <span
              className="bg-green-500 rounded-md px-2 py-1 text-xs font-semibold self-end"
              >
            {metric}
          </span>
          </div>
          <div className="text-gray-500 flex flex-col dark:text-gray-400">
            <small>Released: {released}</small>
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