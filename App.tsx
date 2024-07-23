import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  return (
    <LinearGradient
      colors={['#FFAEAE', '#DFB1E0', '#69C6CC', '#69C6CC']}
      style={styles.linearGradient}
    >


      <Text style={styles.text}>
        Inicio de Sesión:
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  text: {
    color: '#000000',
    textAlign:'center',
    padding:20,
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor:'#FFFFFF'
  },
});

export default App;
