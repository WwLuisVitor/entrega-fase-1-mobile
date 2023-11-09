import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from './src/pages/Login/Login';
import CreateAccount from './src/pages/CreateAccount/CreateAccount';
import Home from './src/pages/Home/Home';
import ForgotPassword from './src/pages/ForgotPassword/ForgotPassword';

const App = (): JSX.Element => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen options={{ headerShown: false }} name="login" component={Login}></Stack.Screen>
        <Stack.Screen options={{title:'Account Creation' }} name="createAccount" component={CreateAccount}></Stack.Screen>
        <Stack.Screen options={{title:'Password Recovery'}} name="forgotPassword" component={ForgotPassword}></Stack.Screen>
        <Stack.Screen name="home" component={Home}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  );

}



export default App;