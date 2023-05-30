import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import GenreHeader from "../components/genres/GenreHeader"
import GameCard from "../components/games/GameCard"
import {useGetAllGenres} from "../actions/useGetAllGenres"
import { useGetGameByGenre } from "../actions/useGetGameByGenre";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";



const GenreDetails = () => {
  const [page, setPage] = useState(1);
  const { slug } = useParams();
  const { data: genres } = useGetAllGenres();
  const genre = genres?.results.find((genre) => genre.slug === slug);
  const { data: games, isLoading, isError, error, isFetching, isPreviousData } = useGetGameByGenre(slug, page);

  
  useEffect(() => {
    window.scrollTo(0, 0)
    // update the document title
    document.title = `${genre.name} | GameVerse`
  }, [genre])
  
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>
    Error: {error.message}
  </p>;


  const handlePrevious = () => {
    setPage((prevPage) => prevPage - 1)
  }

  return (
    <section>
      <div>
        <GenreHeader
        name={genre.name}
        images={genre.image_background}
        count={genre.games_count}
        />
        <ul
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 my-10"
        >
          {games.results.map((game) => (
            <GameCard
            key={game.id}
            released={game.released}
            background_image={game.background_image}
            rating={game.rating}
            name={game.name} 
            id={game.id}
            />
          ))}
          {isFetching && !isPreviousData && (
            <div>Fetching more games</div>
          )}
        </ul>
        <div
        className="flex justify-center space-x-2"
        >
          {games?.previous && (
            <button
            className="btn"
            disabled={isPreviousData}
            >
              <BsArrowLeftShort onClick={handlePrevious} />
            </button>
          )}
          {games?.next && (
            <button
            className="btn"
            onClick={() => setPage((prevPage) => prevPage + 1)}
            >
              <BsArrowRightShort size={20}/>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

export default GenreDetails