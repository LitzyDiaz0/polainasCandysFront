import React from 'react';
import { View, Text, StyleSheet, TextInput, Touchable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const Hello = () => <Text>Hola 2 mundo desde moto</Text>;


function App () {
    return (
        <View style={styles.container}>
        
        <View style={styles.containerpink}>
        </View>
        <View style={{flex:3,backgroundColor:'##ffffff', flexDirection:'row'}}>
        <Text style={styles.text}> Categoria de productos</Text>
        </View> 
        </View>   
    );
};

const styles = StyleSheet.create({
container:{
flex:1,
backgroundColor:'#ffffff',
flexDirection:'row', 

},

containerpink:{
    flex:1,
    backgroundColor:'#D8ACD9',
    flexDirection:'row'
},

text: {
    color: '#000000',
    textAlign:'center',
    padding:20,
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor:'#FFFFFF',
},
});

export default App;
