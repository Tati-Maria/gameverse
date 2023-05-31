import { useState, useEffect } from 'react'
import GameList from '../components/games/GameList'
import {useGetPlatforms} from "../actions/getPlatforms"
import Loader from '../components/ui/Loader'
import DeveloperCard from '../components/developers/DeveloperCard'
import {CiCircleChevRight, CiCircleChevLeft} from "react-icons/ci"
import Title from '../components/ui/Title'


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
                />
            ))}
        </GameList>
        <div
        className="flex justify-center items-center space-x-4 py-4"
        >
            <button
            className='btn'
            onClick={handlePrevious}
            disabled={isPreviousData || !previous}
            >
                <CiCircleChevLeft size={30} />
            </button>
            <span>{page}</span>
            <button
            className='btn'
            onClick={handleNext}
            disabled={isPreviousData || !next}
            >
                <CiCircleChevRight size={30}/>
            </button>
        </div>
    </section>
  )
}

export default Platforms