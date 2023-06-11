/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";

const CreatorCard = ({ id, name, image, games }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 shadow-md hover:shadow-lg transition duration-300 ease-in-out">
      <Link
        to={`/creators/${id}`}
        className="flex flex-col justify-center items-center space-y-2"
      >
        <div className="relative w-40 h-40 bg-gray-200 bg-opacity-50 rounded-md overflow-hidden dark:bg-gray-700">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex justify-center items-center">
              <BsFillPersonFill className="text-6xl text-gray-200 dark:text-gray-600" />
            </div>
          )}
        </div>
        <div className="flex flex-col justify-between items-center mt-2">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {games} games
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CreatorCard;
