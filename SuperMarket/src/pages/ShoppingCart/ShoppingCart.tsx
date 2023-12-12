import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View, Button, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import Styles from '../Login/Styles';
import firebaseService from '../../services/firebaseServices';

const ShoppingCart = ({ route }: any) => {
    const { shoppingCart, removeItem, removeAllItem } = route.params;
    const [cartItems, setCartItems] = useState(shoppingCart);
    const [products, setProducts] = useState([]);
    const removeAllItems = () => {
        setCartItems([]);
    };

    const getProducts = () => {
        try {
          firebaseService.findAll('shoppingCart').then((docs: any) => {
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
      getProducts();
    //   const removeCartItem = () => {
    //     firebaseService.removerDocumento('shoppingCart',products)
        
    // };

     


    return (
        <ScrollView>
            {products.map((product: any, i: number) => (
                <View key={i}>
                    <Card>
                        <Card.Title style={{ fontSize: 20, color: '#848484' }}>{product.name}</Card.Title>
                        <Card.Divider />
                        <Card.Image source={{ uri: product.image }} />
                        <View style={Styles.viewShopCart}>
                            <View>
                                <Text style={Styles.productDescriptionText}>Price: {product.price}</Text>
                                <Text style={Styles.productDescriptionText}>Description: {product.description}</Text>
                            </View>

                            <TouchableOpacity style={Styles.generalButtons}
                                onPress={() => firebaseService.removerDocumento('shoppingCart',product.firebaseId)}>
                                <Text style={Styles.generalButtonsText}>Remove Item</Text>
                            </TouchableOpacity>
                        </View>
                    </Card>
                    
                </View>
            ))}
            
            {cartItems.length > 0 && (
                < TouchableOpacity style={Styles.generalButtons}
                    onPress={() => removeAllItems()}>
                    <Text style={Styles.generalButtonsText}>Remove all items</Text>
                </TouchableOpacity>
            )
            }
        </ScrollView >
    );
};

export default ShoppingCart;