import {useParams} from "react-router-dom"
import {SlGameController} from "react-icons/sl"
import {useGetSingleGame} from "../actions/useGetSingleGame"
import { useEffect } from "react";
import {useGameCreators} from "../actions/getDevelopmentTeam"
import { useGameScreenshots } from "../actions/getGameScreenShots";
// components
import GameProfile from "../components/games/GameProfile";
import GameScreenshots from "../components/games/GameScreenshots";
import GameCreators from "../components/games/GameCreators";
import GamePublishers from "../components/games/GamePublishers";
import GameTags from "../components/games/GameTags";    
import GameStores from "../components/games/GameStores";
import Loader from "../components/ui/Loader";
import LikeButton from "../components/ui/LikeButton";


const GameDetails = () => {
    const {id} = useParams();
    const {data: game, error, isLoading} = useGetSingleGame(id)
    const {data: screenshots} = useGameScreenshots(id)
    const {data: creators} = useGameCreators(id)
    
    useEffect(() => {
      window.scrollTo(0, 0)
      // update the document title
      document.title = `${game?.name} | GameVerse`
    }, [game?.name])

    if (isLoading) return <Loader />;

    if (error) {
      return <p>
        Error: {error?.message}
      </p>;
    }
    
  return (
    <section>
        <article className="relative flex items-center justify-between">
          <LikeButton game={{id, name: game?.name, rating: game?.rating, released: game?.released, background_image: game?.background_image}} />
          <h2
          className="text-2xl flex items-center space-x-2 font-bold text-gray-800 uppercase tracking-wider dark:text-gray-100"
          >
            <SlGameController className="text-red-500" /> 
            <span>
                {game?.name}
            </span>
        </h2>
        </article>
        <GameProfile
        name={game?.name}
        background_image={game?.background_image || "https://via.placeholder.com/1920x1080"}
        description={game?.description_raw}
        released={game?.released}
        rating={game?.rating}
        website={game?.website}
        platforms={game?.platforms}
        genres={game?.genres}
        playtime={game?.playtime}
        ratings={game?.ratings}
        color={game?.dominant_color}
        />
        <div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4"
        >
          <GamePublishers
          publishers={game?.publishers} 
          />
          <GameTags
          tags={game?.tags} 
          />
          <GameStores
          stores={game?.stores} 
          />
        </div>
        <GameScreenshots
        screenshots={screenshots?.results} 
        />
        <GameCreators
        name={game?.name}
        creators={creators?.results} 
        count={creators?.count}
        />
    </section>
  )
}

export default GameDetails