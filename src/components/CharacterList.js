import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Character from './Character';

const CharacterList = ({characters}) => {
  return (
    <FlatList
      renderItem={({item}) => <Character item={item} 

      />}
      data={characters}
    />
  );
};

export default CharacterList;

const styles = StyleSheet.create({});
