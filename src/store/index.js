import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const $LOCAL_STORAGE_KEY = 'favorite_games';


export const useFavoriteGamesStore = create(
    persist(
        (set => ({
            favoriteGames: [],
            addFavoriteGame: (game) => set(state => ({ favoriteGames: [...state.favoriteGames, game] })),
            removeFavoriteGame: (game) => set(state => ({ favoriteGames: state.favoriteGames.filter(g => g.id !== game.id) })),
            clearFavoriteGames: () => set(state => ({ favoriteGames: [] })),

        })),
        {
            name: $LOCAL_STORAGE_KEY,
            storage: createJSONStorage(() => localStorage)
        }
    ) // 👈 add the persist middleware
);