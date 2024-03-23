import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './MainStack';
import FavoritesStack from './FavoritesStack';
import home from './../assets/home.jpg';
import favorite from './../assets/favorite.jpg';

const Router = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: () => <Image style={styles.icon} source={home} />,
            tabBarLabel: 'Ana Sayfa',
            tabBarLabelStyle: {color: 'black'},
          }}
          name="MainTab"
          component={MainStack}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: () => <Image style={styles.icon} source={favorite} />,
            tabBarLabel: 'Favoriler',
            tabBarLabelStyle: {color: 'black'},
          }}
          name="FavoritesTab"
          component={FavoritesStack}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({
  icon: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
});
