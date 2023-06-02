import { useState, useEffect } from 'react'
import GameList from '../components/games/GameList'
import {useGetPlatforms} from "../actions/getPlatforms"
import Loader from '../components/ui/Loader'
import DeveloperCard from '../components/developers/DeveloperCard'
import Title from '../components/ui/Title'
import Pagination from '../components/ui/Pagination'


const Platforms = () => {
    const [page, setPage] = useState(1)
    const {data, error, isLoading, isError, isPreviousData} = useGetPlatforms(page);

    useEffect(() => {
        window.scrollTo({behavior: 'smooth', top: '0px'})
        document.title = `Platforms | GameVerse`
    }, [])

    if (isLoading) return <Loader />;

    if (isError) return <div>{error.message}</div>;

    const {next, previous} = data;

    const handleNext = () => {
        if (!isPreviousData && next) {
            setPage((old) => old + 1)
        }
    }

    const handlePrevious = () => {
        if (!isPreviousData && previous) {
            setPage((old) => old - 1)
        }
    }

  return (
    <section
    className="space-y-10"
    >
        <Title
        title={`${data?.count} Gaming Platforms`} 
        />
        <GameList>
            {data?.results?.map(platform => (
                <DeveloperCard
                key={platform.id}
                name={platform.name}
                image={platform.image_background}
                id={platform.id}
                games={platform.games_count}
                link={`/platforms/${platform.id}`}
                />
            ))}
        </GameList>
        <Pagination
        page={page}
        handleNextPage={handleNext}
        handlePrevPage={handlePrevious}
        disabledNext={next}
        disabledPrev={previous} 
        />
    </section>
  )
}

export default Platforms