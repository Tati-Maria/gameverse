import { useGetAllGames } from "../actions/useGetAllGames";
import Loader from "../components/ui/Loader";
import { useState, useEffect} from "react"
import {BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs"
import GameCard from "../components/games/GameCard";
import Title from "../components/ui/Title";
import GameList from "../components/games/GameList";

const Games = () => {
  const [page, setPage] = useState(1);
  const {
    data,
    isLoading,
    isError,
    isFetching,
    isPreviousData,
    error
  } = useGetAllGames(page);


  useEffect(() => {
    window.scrollTo(0, 0)
    // update the document title
    document.title = `All Games | GameVerse`
  }, [])


  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error {error.message}</div>;


  const results = data?.results;

  const handlePrevious = () => {
    setPage((prevPage) => prevPage - 1)
  }

  return (
    <section
    className="space-y-4"
    >
        <Title
        title="All Games" 
        />
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
            metric={game.metacritic}
            parent_platforms={game.parent_platforms}
            />
          ))}
          {isFetching && !isPreviousData && (
            <Loader />
          )}
        </GameList>
        <div
        className="flex justify-center space-x-2"
        >
          {data?.previous && (
            <button
            className="btn"
            disabled={isPreviousData}
            >
              <BsArrowLeftShort onClick={handlePrevious} />
            </button>
          )}
          {data?.next && (
            <button
            className="btn"
            onClick={() => setPage((prevPage) => prevPage + 1)}
            >
              <BsArrowRightShort size={20}/>
            </button>
          )}
        </div>
    </section>
  )
}

export default Games;