import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import FavoriteList from '../components/FavoriteList';

const Favorites = () => {
  const favorites = useSelector(state => state.favorites);
  console.log(favorites);
  return (
    <View style={styles.root}>
      <FavoriteList favorites={favorites.data} />
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#e6e6e6',
    paddingHorizontal: 10,
    paddingTop: 12,
    margin:10,
    borderRadius:20,
    flex: 1,
  }
});
