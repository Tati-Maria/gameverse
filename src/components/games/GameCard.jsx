/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import {HiStar} from "react-icons/hi"


const GameCard = ({
  id,
  name,
  rating,
  released,
  background_image
}) => {
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
        <div>
          <h4>{name}</h4>
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