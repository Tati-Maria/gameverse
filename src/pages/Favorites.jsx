// react and react router dom imports
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// icons
import {GiConsoleController} from "react-icons/gi";
import {AiOutlineClear} from 'react-icons/ai';
// components
import Title from "../components/ui/Title";
import GameCard from "../components/games/GameCard";
import GameList from "../components/games/GameList";
import Button from "../components/ui/Button";
// store zustand
import { useFavoriteGamesStore } from '../store';
// react hot toast
import toast from 'react-hot-toast';


const Favorites = () => {
  const navigate = useNavigate();
  const favoriteGames = useFavoriteGamesStore(state => state.favoriteGames);
  const clearFavoriteGames = useFavoriteGamesStore(state => state.clearFavoriteGames);

  useEffect(() => {
    window.scrollTo(0, 0)
    // update the document title
    document.title = `Favorites | GameVerse`
  }, [favoriteGames]);

  return (
    <section className='space-y-10'>
      <Title title="Favorites" />
      <GameList>
        {favoriteGames.length > 0 ? favoriteGames.map(game => (
          <GameCard
          key={game.id}
          id={game.id}
          name={game.name}
          metric={game.metacritic || 0}
          background_image={game.background_image}
          rating={game.rating}
          released={game.released}
          parent_platforms={game.parent_platforms}
          />
          )) : (
            <div 
            className="col-span-4 flex items-center justify-center flex-col space-y-4"
            >
            <p className="text-2xl font-semibold opacity-30 text-center">You don&#39;t have any favorite games yet</p>
            <Button
            className='btn-blue' 
            action={() => navigate('/games')}
            text="Find your favorite games"
            icon={GiConsoleController}
            type='button'
            />
          </div>
        ) }
        </GameList>
      {favoriteGames.length > 0 && (
        <div>
          <Button
          action={() => {
            clearFavoriteGames();
            toast.success('Favorite games cleared', {
              duration: 2000,
              position: 'bottom-center',
              style: {
                backgroundColor: '#4B5563',
                color: '#F3F4F6',
              }
            });
          }} 
          text="Clear all favorites"
          icon={AiOutlineClear}
          type='button'
          className="btn-red"
          />
        </div>
      )}
    </section>
  )
}

export default Favorites