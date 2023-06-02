/* eslint-disable react/prop-types */
import {FcLike, FcLikePlaceholder} from 'react-icons/fc';
import { useFavoriteGamesStore } from '../../store';
import toast from 'react-hot-toast';

const LikeButton = ({
    game,
}) => {
    const addToFavoriteGame = useFavoriteGamesStore(state => state.addFavoriteGame)
    const removeFromFavoriteGame = useFavoriteGamesStore(state => state.removeFavoriteGame)
    const favorites = useFavoriteGamesStore((state) => state.favoriteGames);

    const isFavorite = favorites.some((favorite) => favorite.id === game?.id)

    

    const handleFavoriteToggle = () => {
        if (isFavorite) {
            removeFromFavoriteGame(game)
            toast.success(`Removed ${game?.name} from favorites`, {
                duration: 2000,
                position: 'bottom-center',
                style: {
                backgroundColor: '#4B5563',
                color: '#F3F4F6',
              }
            })
        } else {
            addToFavoriteGame(game)
            toast.success(`Added ${game?.name} to favorites`, {
                duration: 2000,
                position: 'bottom-center',
                style: {
                backgroundColor: '#4B5563',
                color: '#F3F4F6',
              }
            })
        }
    }

  return (
    <button
    type="button"
    onClick={handleFavoriteToggle}
    className="absolute top-2 right-2 z-10 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg transition-colors duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-700"
    >
        {isFavorite ? <FcLike /> : <FcLikePlaceholder />}
    </button>
  )
}

export default LikeButton