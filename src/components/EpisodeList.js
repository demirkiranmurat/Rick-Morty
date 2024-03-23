import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Episode from './Episode';

const EpisodeList = ({episodes,navigation}) => {
  return (
    <FlatList
      renderItem={({item}) => <Episode item={item} 
      navigation={navigation}
      />}
      data={episodes}
    />
  );
};

export default EpisodeList;

const styles = StyleSheet.create({});
