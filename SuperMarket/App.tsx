import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from './src/pages/Login/Login';
import CreateAccount from './src/pages/CreateAccount/CreateAccount';
import Home from './src/pages/Home/Home';
import ForgotPassword from './src/pages/ForgotPassword/ForgotPassword';
import  Icon  from 'react-native-vector-icons/AntDesign';

const App = (): JSX.Element => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="login" component={Login}></Stack.Screen>
        <Stack.Screen options={{ title: 'Account Creation', headerTintColor: "#848484" }} name="createAccount" component={CreateAccount}></Stack.Screen>
        <Stack.Screen options={{ title: 'Password Recovery', headerTintColor: "#848484" }} name="forgotPassword" component={ForgotPassword}></Stack.Screen>
        <Stack.Screen options={{
          headerBackVisible: false,
          title: 'Home',
          headerTitleAlign: 'center',
          headerRight:() =>(<Icon name='logout' size={28}></Icon>),
          headerLeft:() =>(<Icon name='shoppingcart' size={32}></Icon>)
        }} name="home" component={Home}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer >

  );

}



export default App;