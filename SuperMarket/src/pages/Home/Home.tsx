import React, { useEffect } from 'react'
import { ScrollView, Text, View, TouchableOpacity, ToastAndroid } from 'react-native'
import { Card } from 'react-native-elements'
import Styles from '../Login/Styles'
import Icon from 'react-native-vector-icons/AntDesign'
import { useState } from 'react'
import firebaseService from '../../services/firebaseServices'

const Home = ({ shoppingCart, setShoppingCart }: any) => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);


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
  const addToFavorites = (product: any) => {
    firebaseService.save(product, 'userFavorites')
      .then(() => {
        openToast('Produto adicionado aos favoritos!');
        setFavorites([...favorites, product]);
      })
      .catch((error: any) => {
        console.error('Erro ao adicionar aos favoritos:', error);
      });
  }

  const removeFromFavorites = (product: any) => {
    firebaseService.remove(product.firebaseId, 'userFavorites')
      .then(() => {
        openToast('Produto removido dos favoritos!');
        const updatedFavorites = favorites.filter((fav: any) => fav.firebaseId !== product.firebaseId);
        setFavorites(updatedFavorites);
      })
      .catch((error: any) => {
        console.error('Erro ao remover dos favoritos:', error);
      });
  }

  const toggleFavorite = (product: any) => {
    const isProductInFavorites = favorites && favorites.some((fav: any) => fav.firebaseId === product.firebaseId);
  
    if (isProductInFavorites) {
      removeFromFavorites(product);
    } else {
      addToFavorites(product);
    }
  }


  return (
    <ScrollView>
      {
        products.map((product: any) => (
          <Card key={product.firebaseId}>
            <Card.Title style={{ fontSize: 20, color: '#848484' }}>{product.name}</Card.Title>
            <Card.Divider />
            <Card.Image source={{ uri: product.image }} />
            <View style={Styles.productDescriptionView}>
              <Text style={Styles.productDescriptionText}>Price: {product.price}</Text>
              <Text style={Styles.productDescriptionText}>Description: {product.description}</Text>
            </View>
            {
              <Icon
              onPress={() => {
                toggleFavorite(product);
              }}
              name={(favorites && favorites.some((fav: any) => fav.firebaseId === product.firebaseId)) ? 'heart' : 'hearto'}
              size={28}
              color={(favorites && favorites.some((fav: any) => fav.firebaseId === product.firebaseId)) ? 'red' : undefined}
              style={{ marginBottom: '3%' }}
            />
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