import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Route from './src/Route/Route';
import Landing from './src/screens/Landing';

import BottomTabNav from './src/inc/BottomTabNav';

import Profile from './src/screens/Profile';
import Amplify from 'aws-amplify';
import config from './aws-exports'

export default function App() {
  return (
    // <BottomTabNav />
    <View>
       <StatusBar  />
       <Profile />
    </View>
   
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
