import {useGetGames} from "../actions/useGetGames"
import {useGetAllGenres} from "../actions/useGetAllGenres"
import {Splide, SplideSlide} from "@splidejs/react-splide";
import { useEffect } from "react"
import Loader from "../components/ui/Loader"
import GameHeader from "../components/games/GameHeader"
import '@splidejs/react-splide/css';
import GameCard from "../components/games/GameCard";
import DeveloperCard from "../components/developers/DeveloperCard"
import { Link } from "react-router-dom";

const options = {
  gap: '1rem',
  perPage: 4,
  breakpoints: {
    640: {
      perPage: 2,
    },
    768: {
      perPage: 3,
    },
    1024: {
      perPage: 4,
    },
  },
  rewind: true,
}

const Home = () => {
  const {data, error, isLoading} = useGetGames();
  const {data: genresData} = useGetAllGenres();

  useEffect(() => {
    window.scrollTo(0, 0)
    // update the document title
    document.title = `Home | GameVerse`
  }, []);

  if (isLoading) return <Loader />;

  if (error) return <div>{error}</div>


  return (
    <section>
      <article
      className="bg-gray-100 border border-gray-200 rounded-xl p-6 my-6 dark:bg-gray-800 dark:border-gray-700"
      >
      <h1 className="text-3xl text-center font-bold">Welcome to GameVerse</h1>
      <p className="text-center">A place to find your favorite games</p>
      </article>
      <article
      className="my-6"
      >
        <h2>
          <GameHeader
          text="Find your favorite games"  
          />
        </h2>
        <ul>
          <Splide
          options={options}
          aria-label="Find your favorite games"
          className="w-full py-4"
          >
            {data.results.map((game) => (
              <SplideSlide
              key={game.id}
              >
                <GameCard
                id={game.id}
                name={game.name}
                background_image={game.background_image}
                rating={game.rating}
                released={game.released}
                />
              </SplideSlide>
            ))}
          </Splide>
        </ul>
      </article>
      <div
      className="my-6"
      >
        <GameHeader
        text="Browse by genre" 
        />
        <ul>
          <Splide
          options={options}
          aria-label="Browse by genre"
          className="w-full py-4"
          >
            {genresData.results.map((genre) => (
              <SplideSlide
              key={genre.id}
              >
                <DeveloperCard
                image={genre.image_background}
                name={genre.name}
                games={genre.games_count}
                link={`/genres/${genre.slug}`} 
                />
               </SplideSlide>
            ))}
          </Splide>
        </ul>
      </div>
      <div
      className="space-y-4 bg-gray-100 border border-gray-200 rounded-xl p-6 my-6 dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center"
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