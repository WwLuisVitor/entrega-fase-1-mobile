import React from 'react';
import {Text, View, TextInput, Button } from 'react-native';
import Styles from './Styles';


const App = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.label}>Login</Text>
      <TextInput style={Styles.input}/>
      <Text style={Styles.label}>Password</Text>
      <TextInput style={Styles.input}/>
      <View style={Styles.createAccountForgot}>
        <Text style={Styles.link}>Create Account</Text>
        <Text style={Styles.link}>Forgot Password</Text>
      </View>
      <Button title='Enviar'></Button>
    </View>
  );
}



export default App;