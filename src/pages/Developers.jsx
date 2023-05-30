/* eslint-disable react/prop-types */
import {useGetDevelopers} from "../actions/getDevelopers"
import { useState, useEffect} from "react";
import {CiCircleChevRight, CiCircleChevLeft} from "react-icons/ci";
import DeveloperCard from "../components/developers/DeveloperCard";
import Loader from "../components/ui/Loader";


const Pagination = ({handleNextPage, handlePrevPage, disabledNext, disabledPrev}) => {
    return (
        <div
        className="flex justify-between items-center my-10"
        >
            <button
            disabled={disabledPrev === null}
            onClick={handlePrevPage}
            className="disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <CiCircleChevLeft size={40}/>
            </button>
            <button
            disabled={disabledNext === null}
            onClick={handleNextPage}
            className="disabled:opacity-50 disabled:cursor-not-allowed text-blue-500 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
                <CiCircleChevRight size={40}/>
            </button>
        </div>
    )
} 

const Developers = () => {
    const [page, setPage] = useState(1);
    const {data, isError, error, isLoading, isPreviousData} = useGetDevelopers(page);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Developers | GameVerse";
    }, []);

    if (isLoading) return <Loader />;
    if (isError) return <div>{error.message}</div>


    const {next, previous} = data;

    const handleNextPage = () => {
        if (!isPreviousData && next) {
            setPage((old) => old + 1);
        }
    }

    const handlePrevPage = () => {
        if (!isPreviousData && previous) {
            setPage((old) => old - 1);
        }
    }


  return (
    <section
    className="space-y-10"
    >
        <h2 className="font-flipahaus uppercase text-2xl">
            Found {data.count} developers 
        </h2>
        <ul
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
            {data.results.map((developer) => (
                <DeveloperCard
                key={developer.id}
                name={developer.name}
                games={developer.games_count}
                image={developer.image_background}
                />
            ))}
        </ul>
        <Pagination
        disabledNext={next}
        disabledPrev={previous}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage} 
        />
    </section>
  )
}

export default Developers