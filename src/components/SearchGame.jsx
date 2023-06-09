/* eslint-disable react/prop-types */
import { useState } from "react";
import { SyncLoader } from "react-spinners";
import { Link } from "react-router-dom";
import {useSearchGame} from "../actions/useSearchGame"

const SearchResults = ({isLoading, data, clearInput}) => {
 const {results: games} = data;

  return (
    <div
    aria-label="search results" 
    className="absolute top-10 left-0 flex flex-col px-4 py-2 divide-y divide-gray-400 overflow-y-scroll w-full max-h-96 bg-gray-100 rounded-md shadow-md dark:bg-gray-800 dark:text-gray-100 z-50 "
    >
      {isLoading && (
        <div className="flex items-center justify-center py-4">
          <SyncLoader color="#3B82F6" />
        </div>
      )}
      {data && games?.map((game) => (
        <Link
        onClick={clearInput}
        to={`/games/${game.id}`}
        key={game.id}
        className="hover:text-gray-500 py-2 dark:hover:text-gray-300"
        >
          {game.name}
        </Link>
      ) )}
    </div>
  )
}

const SearchGame = () => {

  const [name, setName] = useState("");
  const {data, isLoading} = useSearchGame(name);

  //clear input field when clicked on a game
  const clearInput = () => {
    setName("");
  }

  return (
    <form className="relative block">
      <input 
      type="text" 
      placeholder="Eg. Cyberpunk 2077"
      onChange={(e) => setName(e.target.value)}
      value={name}
      className="input-search dark:bg-gray-800 dark:text-gray-100" 
      />
      {data && <SearchResults 
      isLoading={isLoading} 
      data={data}
      clearInput={clearInput}  
      />}
    </form>
  )
}

export default SearchGame