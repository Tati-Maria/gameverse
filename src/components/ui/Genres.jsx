import {useGetAllGenres} from "../../actions/useGetAllGenres"
import { Link } from "react-router-dom";
import { SyncLoader } from "react-spinners";

const Genres = () => {
    const {data, isLoading} = useGetAllGenres();


  return (
    <section
    aria-label="genres"
    id="genres"
    className="overflow-x-auto flex flex-row flex-nowrap py-4 px-2 gap-4 w-full max-w-full h-20 bg-gray-100 dark:bg-gray-800 rounded-md shadow-md mt-6 scrollbar-hide"
    >
        {isLoading && (
            <div className="flex items-center justify-center text-center py-4">
                <SyncLoader
                margin={2} 
                size={10} 
                color="#3B82F6" 
                cssOverride={{
                    display: 'block',
                    margin: '0 auto',
                }}
                />
            </div>
        )}
        {data && data?.results?.map((genre) => (
            <Link
            to={`/genres/${genre.slug}`}
            key={genre.id}
            className="flex flex-col justify-center px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md shadow-md hover:bg-gray-300 dark:hover:bg-gray-600"
            >
                <img
                className="w-10 h-10 rounded-full object-cover object-center mx-auto"
                src={genre.image_background}
                alt={genre.name}
                />
                <h4
                className="text-sm font-semibold text-center"
                >
                    {genre.name}
                </h4>
            </Link>
        ))}
    </section>
  )
}

export default Genres