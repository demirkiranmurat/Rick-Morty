import {createSlice} from '@reduxjs/toolkit';
import {Alert} from 'react-native';

const initialState = {
  count: 0,
  data: [],
};
export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    removeFromFavorite: (state, action) => {
      state.data = state.data.filter(item => item.id !== action.payload.id);
      state.count--;
      Alert.alert('Bu Karakter Başarılı Bir Şekilde Favoriden Silinmiştir');
    },

    addToFavorite: (state, action) => {
      const isExist = state.data.find(item => item.id == action.payload.id);
      if (isExist) {
        Alert.alert('Bu Karakter Daha Önce Favoriye Eklenmiştir');
      } else if (state.count > 9) {
        Alert.alert('Favorilere En Fazla On Adet Karakter Eklenebilmektedir. ');
      } else {
        state.data = [...state.data, action.payload];
        state.count++;
        Alert.alert('Bu Karakter Başarılı Bir Şekilde Favoriye Eklenmiştir');
      }
    },
  },
});

export const {addToFavorite, removeFromFavorite} = favoritesSlice.actions;

export default favoritesSlice.reducer;
