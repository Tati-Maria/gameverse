import { useParams } from "react-router-dom"
import Loader from "../components/ui/Loader"
import { useGameByDeveloper } from "../actions/getGameByDeveloper";
import { useState } from "react";
import { useSingleDeveloper } from "../actions/getSingleDeveloper"
import GenreHeader from "../components/genres/GenreHeader";
import GameList from "../components/games/GameList";
import GameCard from "../components/games/GameCard";

const DeveloperDetail = () => {
    const { id } = useParams()
    const {isLoading, data: developer, error} = useSingleDeveloper(id);
    const [page, setPage] = useState(1);
    const [showMore, setShowMore] = useState(false);
    const {isLoading: isLoadingGames, data: games, error: errorGames, isPreviousData} = useGameByDeveloper(id, page);
    
    if (isLoading || isLoadingGames) {
        return <Loader />
    }

    if (error || errorGames) {
        return <div>Error: {error}</div>
    }

    const handleShowMore = () => {
        setPage((old) => old + 1);
        setShowMore(true);
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
                {games?.map((game) => (
                    <GameCard
                    key={game?.id}
                    name={game?.name}
                    released={game?.released}
                    id={game?.id}
                    background_image={game?.background_image || "https://via.placeholder.com/300x400"}
                    metric={game.metacritic || 0}
                    parent_platforms={game.parent_platforms}
                    rating={game?.rating} 
                    />
                ))}
            </GameList>
            {!isPreviousData && games?.next && (
                <button
                className="btn-secondary"
                onClick={handleShowMore}
                type="button"
                >
                    {showMore ? "Show Less" : "Show More"}
                </button>
            )}
        </div>
    </section>
  )
}

export default DeveloperDetail