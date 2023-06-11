import { useGetAllGames } from "../actions/useGetAllGames";
import Loader from "../components/ui/Loader";
import { useState, useEffect} from "react"
import GameCard from "../components/games/GameCard";
import Title from "../components/ui/Title";
import GameList from "../components/games/GameList";
import Pagination from "../components/ui/Pagination";

const Games = () => {
  const [page, setPage] = useState(1);
  const [ordering, setOrdering] = useState("-rating");
  const {
    data,
    isLoading,
    isError,
    isFetching,
    isPreviousData,
    error
  } = useGetAllGames(ordering, page);


  useEffect(() => {
    window.scrollTo(0, 0)
    // update the document title
    document.title = `All Games | GameVerse`
  }, [])


  if (isLoading) {
    return (
      <Loader />
    )
  }

  if (isError) return <div>Error {error.message}</div>;


  const results = data?.results;

  const handlePrevious = () => {
    setPage((prevPage) => prevPage - 1)
  }

  return (
    <section
    className="space-y-4"
    >
       <div
        className="flex justify-between items-center py-10"
       >
        <Title
        title="All Games"
        />
        <select
        onChange={(e) => setOrdering(e.target.value)}
        value={ordering}  
        name="ordering" 
        id="ordering"
        className="bg-gray-100 text-black rounded-md px-4 py-3 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-blue-700"
        >
          <option value="name">Name</option>
          <option value="-released">Released</option>
          <option value="-rating">Rating</option>
          <option value="-metacritic">Metacritic</option>
          <option value="-added">Added</option>
        </select>
       </div>
        <GameList
        >
          {results?.map((game) => (
            <GameCard
            key={game.id}
            name={game.name}
            released={game.released}
            rating={game.rating}
            background_image={game.background_image}
            id={game.id} 
            metric={game.metacritic || 0}
            parent_platforms={game.parent_platforms}
            />
          ))}
          {isFetching && !isPreviousData && (
            <Loader />
          )}
        </GameList>
        <Pagination
        page={page}
        handleNextPage={() => setPage((old) => old + 1)}
        handlePrevPage={handlePrevious}
        disabledNext={isPreviousData || !data?.next}
        disabledPrev={page === 1} 
        />
    </section>
  )
}

export default Games;