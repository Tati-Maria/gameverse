import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import GenreHeader from "../components/genres/GenreHeader"
import GameCard from "../components/games/GameCard"
import {useGetAllGenres} from "../actions/useGetAllGenres"
import Loader from "../components/ui/Loader";
import { useGetGameByGenre } from "../actions/useGetGameByGenre";
import GameList from "../components/games/GameList";
import Pagination from "../components/ui/Pagination";



const GenreDetails = () => {
  const [page, setPage] = useState(1);
  const { slug } = useParams();
  const { data: genres } = useGetAllGenres();
  const genre = genres?.results.find((genre) => genre.slug === slug);
  const { data: games, isLoading, isError, error, isFetching, isPreviousData } = useGetGameByGenre(slug, page);

  
  useEffect(() => {
    window.scrollTo(0, 0)
    // update the document title
    document.title = `${genre?.name} | GameVerse`
  }, [genre])
  
  if (isLoading) return <Loader />;
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
        name={genre?.name}
        images={genre?.image_background}
        count={genre?.games_count}
        />
        <GameList
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 my-10"
        >
          {games?.results.map((game) => (
            <GameCard
            key={game?.id}
            released={game?.released}
            background_image={game?.background_image || "https://via.placeholder.com/300x400"}
            rating={game?.rating}
            name={game?.name} 
            id={game?.id}
            parent_platforms={game.parent_platforms}
            metric={game.metacritic || 0}
            />
          ))}
          {isFetching && !isPreviousData && (
            <div>Fetching more games</div>
          )}
        </GameList>
        <Pagination
        handlePrevious={handlePrevious}
        handleNext={() => setPage((prevPage) => prevPage + 1)}
        disabledNext={isPreviousData || !games?.next}
        disabledPrevious={page === 1}
        page={page} 
        />
      </div>
    </section>
  )
}

export default GenreDetails