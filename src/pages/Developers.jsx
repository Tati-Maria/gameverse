/* eslint-disable react/prop-types */
import { useGetAllCreators, useGetDevelopers } from "../actions/getDevelopers";
import placeholder from "../assets/placeholder.png";
import { useState, useEffect } from "react";
import DeveloperCard from "../components/developers/DeveloperCard";
import Loader from "../components/ui/Loader";
import Pagination from "../components/ui/Pagination";
import GameList from "../components/games/GameList";

const Developers = () => {
  const [page, setPage] = useState(1);
  const {
    data: creators,
    error: creatorsError,
    loading: creatorLoading,
  } = useGetAllCreators(page);
  const [creatorsType, setCreatorsType] = useState("company");
  const { data, isError, error, isLoading, isPreviousData } =
    useGetDevelopers(page);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Developers | GameVerse";
  }, []);

  if (isLoading || creatorLoading) return <Loader />;
  if (isError || creatorsError) return <div>{error.message}</div>;

  const { next, previous } = data;
  const { next: creatorNext, previous: creatorPrevious } = creators;

  const handleNextPage = () => {
    if (!isPreviousData && next) {
      setPage(old => old + 1);
    }
  };

  const handlePrevPage = () => {
    if (!isPreviousData && previous) {
      setPage(old => old - 1);
    }
  };

  return (
    <section className="space-y-10">
      <div className="flex justify-between items-center">
        <h2 className="font-flipahaus uppercase text-2xl">
          {creatorsType === "programmers" ? "Programmers" : "Companies"}
        </h2>
        <form>
          <select
            value={creatorsType}
            onChange={e => setCreatorsType(e.target.value)}
            name="creators"
            id="creators"
            className="bg-gray-100 dark:bg-gray-800 rounded-md p-2"
          >
            <option value="company">Companies</option>
            <option value="programmers">Programmers</option>
          </select>
        </form>
      </div>
      <GameList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {creatorsType === "programmers"
          ? creators?.results?.map(creator => (
              <DeveloperCard
                key={creator.id}
                games={creator.games_count}
                name={creator.name}
                image={creator.image || placeholder}
                link={`/creators/${creator.slug}`}
              />
            ))
          : data.results.map(developer => (
              <DeveloperCard
                key={developer.id}
                games={developer.games_count}
                name={developer.name}
                image={developer.image_background}
                link={`/developers/${developer.id}`}
              />
            ))}
      </GameList>
      <Pagination
        disabledNext={next === null || creatorNext === null || !next} // if next is null or creatorNext is null or next is false 
        disabledPrev={previous === null || creatorPrevious === null || !previous} // if previous is null or creatorPrevious is null or previous is false
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        page={page}
      />
    </section>
  );
};

export default Developers;
