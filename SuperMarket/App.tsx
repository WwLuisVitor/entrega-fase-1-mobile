import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import Login from './src/pages/Login/Login';
import CreateAccount from './src/pages/CreateAccount/CreateAccount';
import Home from './src/pages/Home/Home';
import ForgotPassword from './src/pages/ForgotPassword/ForgotPassword';
import ShoppingCart from './src/pages/ShoppingCart/ShoppingCart'
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Profile from './src/pages/Profile/Profile';
import { useState } from 'react'
import Favorites from './src/pages/Favorites/Favorites'
import Compra from './src/pages/Compra/Compra';

const App = (): JSX.Element => {

  const Stack = createNativeStackNavigator()
  const [shoppingCart, setShoppingCart] = useState<any[]>([])
  const [favorites, setFavorites] = useState([])

  function removeItem(currentIndex: number) {
    const teste = shoppingCart.filter((element, index) => {index !== currentIndex})
    setShoppingCart([...teste])
  }
  function removeAllItem() {
    setShoppingCart([])
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login}></Stack.Screen>
        
        <Stack.Screen options={({ navigation }) => ({
          title: "Home",
          headerTintColor: '#848484',
          headerBackVisible: false,
          headerTitleAlign: "center",
          headerLeft: () => (<Icon onPress={() => (navigation.navigate("Profile"))} name="user" size={28} color={'#848484'}></Icon>),
          headerRight: () => (<Icon onPress={() => (navigation.replace("ShoppingCart", { shoppingCart, removeItem, removeAllItem }))} name="shoppingcart" size={30} color={'#848484'}></Icon>)
        })} name="home">{
            () => (
              <Home shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} favorites={favorites} setFavorites={setFavorites} ></Home>
            )
          }
        </Stack.Screen>
        
        <Stack.Screen options={{ title: 'Account Creation', headerTintColor: '#848484' }} name="createAccount" component={CreateAccount}></Stack.Screen>
        <Stack.Screen options={{ title: 'Password Recorevy', headerTintColor: '#848484' }} name="forgotPassword" component={ForgotPassword}></Stack.Screen>
        <Stack.Screen options={({ navigation }) => ({
          title: "Shopping Cart",
          headerTintColor: '#848484',
          headerRight: () => (<Icon2 onPress={() => (navigation.navigate("Compra",removeAllItem()))} name="payment" size={28} color={'#848484'}></Icon2>),
          headerLeft:() => (
            <Icon
              onPress={() => {
                // Ação personalizada para navegar para a tela inicial
                navigation.navigate("home");
              }}
              name="arrowleft"
              size={25}
              color={'#848484'}
              style={{ marginLeft: 10, marginRight:20 }}
            />
          ),
        })} name="ShoppingCart" component={ShoppingCart}></Stack.Screen>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Compra" component={Compra} />
        <Stack.Screen name="Favorites">{() => (<Favorites favorites ={favorites} setFavorites={setFavorites}></Favorites>)}</Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer >

  );
}



export default App;