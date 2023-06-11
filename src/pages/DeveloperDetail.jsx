import { useParams } from "react-router-dom"
import Loader from "../components/ui/Loader"
import { useGameByDeveloper } from "../actions/getGameByDeveloper";
import { useState, useEffect } from "react";
import { useSingleDeveloper } from "../actions/getSingleDeveloper"
import GenreHeader from "../components/genres/GenreHeader";
import GameList from "../components/games/GameList";
import GameCard from "../components/games/GameCard";
import Pagination from "../components/ui/Pagination";

const DeveloperDetail = () => {
    const { id } = useParams()
    const {isLoading, data: developer, error} = useSingleDeveloper(id);
    const [page, setPage] = useState(1);
    const {isLoading: isLoadingGames, data: games, error: errorGames, isPreviousData} = useGameByDeveloper(id, page);

    useEffect(() => {
        window.scrollTo({behavior: 'smooth', top: '0px'})
        document.title = `${developer?.name} | GameVerse`
    }, [developer])
    
    if (isLoading || isLoadingGames) {
        return <Loader />
    }

    if (error || errorGames) {
        return <div>Error: {error?.message}</div>
    }


    const handlePrevious = () => {
        setPage((prevPage) => prevPage - 1)
    }

    const handleNext = () => {
        if(!isPreviousData) {
            setPage((prevPage) => prevPage + 1)
        }
    }

    


  return (
    <section>
        <div className="space-y-10">
            <GenreHeader
            name={developer?.name}
            images={developer?.image_background}
            count={developer?.games_count}
            />
            <GameList>
                {games?.results?.map((game) => (
                    <GameCard
                    key={game?.id}
                    name={game?.name}
                    released={game?.released}
                    id={game?.id}
                    background_image={game?.background_image}
                    metric={game.metacritic || 0}
                    parent_platforms={game.parent_platforms}
                    rating={game?.rating} 
                    />
                ))}
            </GameList>
            {/* Disable when it reached the end of the game list*/}
            <Pagination
            disabledNext={isPreviousData || !games?.next}
            disabledPrev={page === 1}
            handleNextPage={handleNext}
            handlePrevPage={handlePrevious}
            page={page}
            />
        </div>
    </section>
  )
}

export default DeveloperDetail