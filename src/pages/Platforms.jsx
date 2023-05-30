import { useState, useEffect } from 'react'
import GameHeader from '../components/games/GameHeader'
import {useGetPlatforms} from "../actions/getPlatforms"
import Loader from '../components/ui/Loader'
import DeveloperCard from '../components/developers/DeveloperCard'
import {CiCircleChevRight, CiCircleChevLeft} from "react-icons/ci"


const Platforms = () => {
    const [page, setPage] = useState(1)
    const {data, error, isLoading, isError, isPreviousData} = useGetPlatforms(page);

    useEffect(() => {
        window.scrollTo({behavior: 'smooth', top: '0px'})
        document.title = `Platforms | GameVerse`
    }, [])

    if (isLoading) return <Loader />;

    if (isError) return <div>{error.message}</div>;

    const {results, next, previous} = data;

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
    <section>
        <GameHeader 
        title="Find all gaming platforms here" 
        />
        <ul>
            {results?.map((platform) => (
                <DeveloperCard
                key={platform.id}
                image={platform.image_background}
                games={platform.games}
                name={platform.name} 
                />
            ))}
        </ul>
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