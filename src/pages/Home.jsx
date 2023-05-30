import {useGetGames} from "../actions/useGetGames"
import GameList from "../components/GameList"
import GameCard from "../components/GameCard"
import { useEffect } from "react"

const Home = () => {
  const {data, error, isLoading} = useGetGames();

  useEffect(() => {
    window.scrollTo(0, 0)
    // update the document title
    document.title = `Home | GameVerse`
  }, []);

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>{error}</div>


  return (
    <div>
      <article
      className="bg-gray-100 border border-gray-200 rounded-xl p-6 m-6 dark:bg-gray-800 dark:border-gray-700"
      >
      <h1 className="text-3xl text-center font-bold">Welcome to GameVerse</h1>
      <p className="text-center">A place to find your favorite games</p>
      </article>
      <GameList>
        {data.results.map(game => (
          <GameCard
          key={game.id}
          id={game.id}
          background_image={game.background_image}
          name={game.name}
          released={game.released}
          rating={game.rating} 
          />
        ))}
      </GameList>
    </div>
  )
}

export default Home;