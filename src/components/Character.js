import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {addToFavorite} from '../store/slices/FavoritesSlice';

const Character = ({item}) => {
  const dispatch = useDispatch();
  const handleAddFavorite = item => {
    dispatch(addToFavorite(item));
  };
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={{uri: item?.image}} />
      <Text style={styles.name}>Name: {item?.name}</Text>
      <Text style={styles.gender}>Gender: {item?.gender}</Text>
      <Text style={styles.species}>Species: {item?.species}</Text>
      <Text style={styles.location}>Location: {item?.location?.name}</Text>
      <Pressable onPress={() => handleAddFavorite(item)} style={styles.button}>
        <Text style={styles.buttonText}>Favoriye Ekle</Text>
      </Pressable>
    </View>
  );
};

export default Character;

const styles = StyleSheet.create({
  image: {
    borderRadius: 300,
    height: 300,
    width: '79%',
    resizeMode: 'contain',
    margin: 10,
  },
  root: {
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  name: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    padding: 1,
  },
  gender: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    padding: 1,
  },
  species: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    padding: 1,
  },
  location: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    padding: 1,
  },
});
