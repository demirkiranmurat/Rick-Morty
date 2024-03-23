import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Episode = ({item, navigation}) => {
  const onPress = item => {
    navigation.push('EpisodeDetail', {item: item});
  };
  return (
    <Pressable onPress={() => onPress(item)} style={styles.root}>
      <Text style={styles.name}>{item?.name}</Text>
      <Text style={styles.air_date}>{item?.air_date}</Text>
      <Text style={styles.episode}>{item?.episode}</Text>
    </Pressable>
  );
};

export default Episode;

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#d9d9d9',
    marginBottom: 8,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 25,
    borderRadius: 10,
  },
  name: {
    flex: 3,
    color: 'black',
    fontWeight: 'bold',
    paddingRight: 5,
    marginLeft: 5,
    fontSize: 16,
  },
  air_date: {
    flex: 3,
    color: 'black',
  },
  episode: {
    flex: 1,
    color: 'black',
  },
});
