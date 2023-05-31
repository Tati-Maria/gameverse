import {useGetNewGame, useGetUpcomingGame, useGetTrendingGame} from "../actions/getTrendingGame"
import { usePopularGames } from "../actions/getPopularGames";
// import {useGetAllGenres} from "../actions/useGetAllGenres"
import {Splide, SplideSlide} from "@splidejs/react-splide";

import { useEffect } from "react"
import { Link } from "react-router-dom";
// import {IoLibraryOutline} from "react-icons/io5"

//components
import Loader from "../components/ui/Loader"
import GameHeader from "../components/games/GameHeader"
import GameCard from "../components/games/GameCard";

const options = {
  gap: '1rem',
  perPage: 3,
  breakpoints: {
    640: {
      perPage: 1,
    },
    768: {
      perPage: 2,
    },
    1024: {
      perPage: 3,
    },
  },
  rewind: true,
  tracker: false,
  arrows: true,
  lazyLoad: 'nearby',
  pagination: true,
}

const Home = () => {
  // const [open, setOpen] = useState(false);
  const {data: popularGames, error, isLoading} = usePopularGames();
  const {data: trendingGames} = useGetTrendingGame();
  const {data: upcomingGames} = useGetUpcomingGame();
  const {data: newGames} = useGetNewGame();

  useEffect(() => {
    window.scrollTo(0, 0)
    // update the document title
    document.title = `Home | GameVerse`
  }, []);

  if (isLoading) return <Loader />;

  if (error) return <div>{error}</div>


  return (
    <section className="relative space-y-10">
      <article
      className="bg-gray-100 border border-gray-200 rounded-xl p-6 my-6 dark:bg-gray-800 dark:border-gray-700"
      >
      <h1 className="text-3xl text-center font-bold">Welcome to GameVerse</h1>
      <p className="text-center">A place to find your favorite games</p>
      </article>
      <article
      className="my-6"
      >
        <div
        className="flex justify-between items-center my-10"
        >
          <GameHeader
            text="Popular Games"  
            />
            {/* <button
            onClick={() => setOpen(prev => !prev)}
            className="btn-secondary"
            >
              <IoLibraryOutline className="w-6 h-6" />
              <span>
                See all Genres
              </span>
            </button> */}
        </div>
        <ul>
          <Splide
          options={options}
          aria-label="Find your favorite games"
          className="w-full py-4"
          >
            {popularGames?.results?.map((game) => (
              <SplideSlide
              key={game.id}
              >
                <GameCard
                id={game.id}
                name={game.name}
                metric={game.metacritic || 0}
                background_image={game.background_image}
                rating={game.rating}
                released={game.released}
                parent_platforms={game.parent_platforms}
                />
              </SplideSlide>
            ))}
          </Splide>
        </ul>
      </article>
      <div
      className="my-6 space-y-10"
      >
        <GameHeader
        text="Trending Games" 
        />
        <ul>
          <Splide
          options={options}
          aria-label="Trending Games"
          className="w-full py-4"
          >
            {trendingGames?.results?.map((game) => (
              <SplideSlide
              key={game.id}
              >
                <GameCard
                id={game.id}
                name={game.name}
                metric={game.metacritic || 0}
                background_image={game.background_image || "https://via.placeholder.com/300"}
                rating={game.rating}
                released={game.released}
                parent_platforms={game.parent_platforms}
                />
              </SplideSlide>
            ))}
          </Splide>
        </ul>
      </div>
      <div className="my-6 space-y-10">
        <GameHeader
        text="Upcoming Games"
        />
        <Splide
        options={options}
        >
          {upcomingGames?.results?.map((game) => (
            <SplideSlide
            key={game.id}
            >
              <GameCard
              id={game.id}
              name={game.name}
              metric={game.metacritic || 0}
              background_image={game.background_image || game.background_image_additional || "https://via.placeholder.com/300"}
              rating={game.rating}
              released={game.released}
              parent_platforms={game.parent_platforms}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <div
      className="my-6 space-y-10"
      >
        <GameHeader
        text="New Games"
        />
        <Splide
        options={options}
        >
          {newGames?.results?.map((game) => (
            <SplideSlide
            key={game.id}
            >
              <GameCard
              id={game.id}
              name={game.name}
              metric={game.metacritic || 0}
              background_image={game.background_image || "https://via.placeholder.com/300"}
              rating={game.rating}
              released={game.released}
              parent_platforms={game.parent_platforms}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <div
      className="space-y-4 bg-gray-100 border border-gray-200 rounded-xl p-6 mb-6 mt-20 dark:bg-gray-800 dark:border-gray-700 text-center flex flex-col justify-center items-center"
      >
        <GameHeader
        text="We have more than 5000 games for you to explore" 
        />
        <p>
          <Link
          className="btn" 
          to={`/games`}>
            See all games
          </Link>
        </p>
      </div>
    </section>
  )
}

export default Home;