import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const SearchBar = ({search, setSearch}) => {
  return (
    <View>
      <TextInput
        placeholder="   Arama yapınız..."
        value={search}
        onChangeText={setSearch}
        style={styles.input}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    color: 'black',
    margin: 5,
    borderRadius: 35,
    bottom: 5,
  },
});
