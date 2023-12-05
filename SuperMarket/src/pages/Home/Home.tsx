import React from 'react'
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, ToastAndroid, Pressable } from 'react-native'
import { Card } from 'react-native-elements'
import Styles from '../Login/Styles'
import Icon from 'react-native-vector-icons/AntDesign'
import { useState } from 'react'
import Products from '../Products/Products'
import firebaseService from '../../services/firebaseServices'

const Home = ({ shoppingCart, setShoppingCart, favorites, setFavorites }: any) => {
  const product = firebaseService.findAll('Product')
  const openToast = (message: string) => {
    ToastAndroid.show(message, 3000)
  }
  const removeFavorite = (product: any) => {
    for (let i = 0; favorites.lenght; i++) {
      if (favorites[i].name === product.name) {
        delete favorites[i]
      }
    }
  }
  return (
    <ScrollView>
      {
           (
            <Card>
              <Card.Title style={{ fontSize: 20, color: '#848484' }}>{product}</Card.Title>
              <Card.Divider />
              <Card.Image source={{ uri: product.image }} />
              <View style={Styles.productDescriptionView}>
                <Text style={Styles.productDescriptionText}>Price: {product.Price}</Text>
                <Text style={Styles.productDescriptionText}>Description: {product.Description}</Text>
              </View>
              {
                favorites ?
                  <Icon onPress={() => { removeFavorite(product), setFavorites(false) }} name="heart" size={28} color="red" style={{ marginBottom: '3%' }}></Icon> :
                  <Icon onPress={() => { setFavorites([...favorites, product]), setFavorites(true) }} name="hearto" size={28} style={{ marginBottom: '3%' }}></Icon>
              }
              <TouchableOpacity style={Styles.generalButtons}
                onPress={() => {
                  openToast("Item adicionado ao carrinho")
                  setShoppingCart([...shoppingCart, product])
                }}>
                <Text style={Styles.generalButtonsText}>Add To Cart</Text>
              </TouchableOpacity>
            </Card>
          )
        }
    </ScrollView>
  )
}

export default Home