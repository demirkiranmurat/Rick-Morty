import {Alert, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {removeFromFavorite} from '../store/slices/FavoritesSlice';

const FavoriteCard = ({item}) => {
  const dispatch = useDispatch();
  const handleRemoveFavorite = () => {
    Alert.alert('Favorilerden Çıkartmak İstiyor musun?', ' ', [
      {
        text: 'Hayır',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Evet', onPress: () => dispatch(removeFromFavorite(item))},
    ]);
  };
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={{uri: item?.image}} />
      <Text>{item?.name}</Text>
      <Pressable onPress={() => handleRemoveFavorite()} style={styles.button}>
        <Text style={styles.buttonText}>Favoriden Çıkar</Text>
      </Pressable>
    </View>
  );
};

export default FavoriteCard;

const styles = StyleSheet.create({
  image: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
  },
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 5,
    backgroundColor: '#d9d9d9',
    borderRadius: 15,
  },
  button: {
    borderWidth: 1,
    paddingVertical: 3,
    marginRight: 5,
    borderRadius: 3,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'black',
    paddingHorizontal: 5,
  },
});
