import React from 'react';
import { View, Text, StyleSheet, TextInput, Touchable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Login from './components/view/login';

import { NavigationContainer } from '@react-navigation/native';
const Hello = () => <Text>Hola 2 mundo desde moto</Text>;


function App () {
  return (
    <Login/>
    
    // <View>
    //   <Viewer/>
    //   <Hello/>
    // </View>
  );
};

const styles = StyleSheet.create({

});

export default App;
