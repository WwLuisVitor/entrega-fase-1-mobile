import React, { useEffect } from 'react'
import { ScrollView, Text, View, TouchableOpacity, ToastAndroid } from 'react-native'
import { Card } from 'react-native-elements'
import Styles from '../Login/Styles'
import Icon from 'react-native-vector-icons/AntDesign'
import { useState } from 'react'
import firebaseService from '../../services/firebaseServices'

const Home = ({ shoppingCart, setShoppingCart, favorites, setFavorites }: any) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Função para buscar um documento específico no Firestore
    const fetchData = () => {
      try {
        firebaseService.findAll('Product').then((docs: any) => {
          if (docs.length) {
            // Se o documento existir, define os dados no estado
            setProducts(docs);
          } else {
            console.log('Nenhum documento encontrado');
          }
        });
        
      } catch (error) {
        console.error('Erro ao buscar documento:', error);
      }
    };

    fetchData(); // Chama a função para buscar os dados ao montar o componente
  }, []);
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
        products.map((product: any) => (
          <Card>
              <Card.Title style={{ fontSize: 20, color: '#848484' }}>{product.name}</Card.Title>
              <Card.Divider />
              <Card.Image source={{ uri: product.image }} />
              <View style={Styles.productDescriptionView}>
                <Text style={Styles.productDescriptionText}>Price: {product.price}</Text>
                <Text style={Styles.productDescriptionText}>Description: {product.description}</Text>
              </View>
              {
                favorites ?
                  <Icon onPress={() => { removeFavorite(product), setFavorites(false) }} name="heart" size={28} color="red" style={{ marginBottom: '3%' }}></Icon> :
                  <Icon onPress={() => { setFavorites([...favorites,product.id]), setFavorites(true) }} name="hearto" size={28} style={{ marginBottom: '3%' }}></Icon>
              }
              <TouchableOpacity style={Styles.generalButtons}
                onPress={() => {
                  openToast("Item adicionado ao carrinho")
                  setShoppingCart([...shoppingCart, product])
                }}>
                <Text style={Styles.generalButtonsText}>Add To Cart</Text>
              </TouchableOpacity>
            </Card>
        ))
        }
    </ScrollView>
  )
}

export default Home