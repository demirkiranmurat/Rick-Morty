import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FavoriteCard from './FavoriteCard';

const FavoriteList = ({favorites}) => {
  return (
    <FlatList
      style={styles.favoritesStyle}
      renderItem={({item}) => <FavoriteCard item={item} />}
      data={favorites}
    />
  );
};

export default FavoriteList;

const styles = StyleSheet.create({
  favoritesStyle: {
    backgroundColor: '#e6e6e6',
  },
});
