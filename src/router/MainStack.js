import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from '../screens/Main';
import EpisodeDetail from '../screens/EpisodeDetail';

const MainStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          headerTitle: 'Ana Sayfa',
        }}
      />
      <Stack.Screen
        name="EpisodeDetail"
        component={EpisodeDetail}
        options={{
          headerTitle: 'Bölüm Detay',
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
