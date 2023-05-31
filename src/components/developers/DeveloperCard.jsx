/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const DeveloperCard = ({
    name,
    games,
    image,
    link,
}) => {
  return (

    <div
    className="bg-gray-100 rounded-md p-4 shadow-md hover:shadow-lg transition duration-300 ease-in-out dark:hover:bg-gray-800 dark:bg-gray-800"
    >
        <div
        className='flex flex-col space-y-4' 
        >
            <img 
            src={image} 
            alt={name}
            className="w-full rounded-md h-48 object-cover" 
            />
            <div className="flex flex-col space-y-2">
                <h4
                className="text-lg font-medium text-gray-800 dark:text-gray-100"
                >{name}</h4>
                <small>{games} games</small>
                {link && (
                  <Link
                  className="text-blue-500 hover:underline" 
                  to={link}>
                      See more
                  </Link>
                )}
            </div>
        </div>
    </div>
  )
}

export default DeveloperCard