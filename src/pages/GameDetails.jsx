import {useParams} from "react-router-dom"
import {SlGameController} from "react-icons/sl"
import {useGetSingleGame} from "../actions/useGetSingleGame"
import { useEffect } from "react";
import GameProfile from "../components/GameProfile";
import GameTags from "../components/GameTags";
import GameClip from "../components/GameClip";
import GamePublishers from "../components/GamePublishers";
import GameStores from "../components/GameStores";

const GameDetails = () => {
    const {id} = useParams();
    const {data: game, error, isLoading} = useGetSingleGame(id)

    useEffect(() => {
      window.scrollTo(0, 0)
      // update the document title
      document.title = `${game?.name} | GameVerse`
    }, [game?.name])

    if (isLoading) return <div>Loading...</div>

    if (error) return <div>{error}</div>
    
  return (
    <section>
        <h2
        className="text-2xl flex items-center space-x-2 font-bold text-gray-800 uppercase tracking-wider dark:text-gray-100"
        >
            <SlGameController className="text-red-500" /> 
            <span>
                {game?.name}
            </span>
        </h2>
        <GameProfile
        name={game?.name}
        background_image={game?.background_image}
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
        className="flex flex-col md:flex-row md:justify-between md:items-center gap-10"
        >
          <GameTags
          tags={game?.tags} 
          />
          <GamePublishers
          publishers={game?.publishers} 
          developers={game?.developers}
          />
          <GameStores
          stores={game?.stores} 
          />
        </div>
        <GameClip
        clip={game?.clip} 
        />
    </section>
  )
}

export default GameDetails