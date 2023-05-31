/* eslint-disable react/prop-types */

import GameHeader from "./GameHeader"


const GamePublishers = ({
    publishers,
    developers
}) => {
  return (
    <div
    className="mt-4 w-full"
    >
        <GameHeader text="Publishers and Developers" />
        <ul
        className="flex flex-wrap mt-2"
        >
            {publishers?.map(publisher => (
                <li
                className="mr-2 mb-2 px-2 py-1 bg-gray-200 rounded-lg text-sm text-gray-500" 
                key={publisher.id}>
                    <span>
                        {publisher.name}
                    </span>
                </li>
            ))}
            {developers?.map(developer => (
                <li
                className="mr-2 mb-2 px-2 py-1 bg-gray-200 rounded-lg text-sm text-gray-500"
                key={developer.id}>
                    <span>
                        {developer.name}
                    </span>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default GamePublishers