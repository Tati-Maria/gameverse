import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSinglePlatform } from '../actions/getSingleDeveloper'
import { usePlatformGames } from '../actions/getGamesByPlatform'
import Loader from '../components/ui/Loader'
import GameCard from '../components/games/GameCard'
import GenreHeader from '../components/genres/GenreHeader'
import GameList from '../components/games/GameList'
import Pagination from '../components/ui/Pagination'

const PlatformDetail = () => {
    const { slug } = useParams();
    const [page, setPage] = useState(1);
    const {isLoading, data: platform, error} = useSinglePlatform(slug);
    const {isLoading: isLoadingGames, data: games, error: errorGames, isPreviousData} = usePlatformGames(slug, page);

    useEffect(() => {
        window.scrollTo({behavior: 'smooth', top: '0px'})
        document.title = `${platform?.name} | GameVerse`
    }, [platform])

    if (isLoading || isLoadingGames ) {
        return <Loader />
    } else if (error || errorGames) {
        return <div>Error: {error}</div>
    } else if (!platform || !games) {
        return <div>Platform not found</div>
    } 

    const handleNextPage = () => {
        if (!isPreviousData) {
            setPage((prevPage) => prevPage + 1)
        }
    }

    const handlePreviousPage = () => {
        if (!isPreviousData) {
            setPage((prevPage) => prevPage - 1)
        }
    }

  return (
    <section>
        <div className="space-y-10">
            <GenreHeader
            name={platform?.name}
            count={platform?.games_count}
            images={platform?.image_background} 
            />
            <GameList>
                {games?.results?.map((game) => (
                    <GameCard
                    key={game.id}
                    id={game.id}
                    name={game.name}
                    released={game.released}
                    image={game.background_image}
                    rating={game.rating}
                    parent_platforms={game.parent_platforms}
                    metric={game.metacritic || 0}
                    background_image={game.background_image || "https://via.placeholder.com/300"}
                    />
                ))}
            </GameList>
            <Pagination
            handleNextPage={handleNextPage}
            handlePrevPage={handlePreviousPage}
            disabledNext={games?.next === null || !games?.next}
            disabledPrev={games?.previous === null || !games?.previous}
            page={page} 
            />
        </div>
    </section>
  )
}

export default PlatformDetail