import {combineReducers, configureStore} from '@reduxjs/toolkit';
import favoritesSlice from './slices/FavoritesSlice';

export const store = configureStore({
  reducer: {
    favorites: favoritesSlice,
  },
});
export const rootReducer = combineReducers({
  favorites: favoritesSlice,
});
