import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Favorites from '../screens/Favorites';

const FavoritesStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerTitle: 'Favorilerim',
        }}
      />
    </Stack.Navigator>
  );
};

export default FavoritesStack;

const styles = StyleSheet.create({});
