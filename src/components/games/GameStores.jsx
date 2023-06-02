/* eslint-disable react/prop-types */

import GameHeader from "./GameHeader"


const GameStores = ({
    stores
}) => {
  return (
    <div
    className="mt-4 w-full"
    >
        <GameHeader text="Where to Buy" />
        <ul
        className="flex flex-wrap mt-2"
        >
            {stores?.length > 0 ? stores?.map(store => (
                <li
                className="mr-2 mb-2 px-2 py-1 bg-gray-200 rounded-lg text-sm text-gray-500" 
                key={store.id}>
                    <span
                    >
                        {store.store.name}
                    </span>
                </li>
            )): <p className="text-gray-500">No stores available!</p>}
        </ul>
    </div>
  )
}

export default GameStores