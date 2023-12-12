import React, { useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import Styles from './Styles'
import firebaseService from '../../services/firebaseServices';


function Compra() {
  const [i, setI] = useState(0)
  const[precototal,setPrecototal] = useState(0)
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    try {
      firebaseService.findAll('shoppingCart').then((docs: any) => {
        setI(docs.length)
        setProducts(docs);
      });
    } catch (error) {
      console.error('Erro ao buscar documento:', error);
    }
  };
  getProducts();
  // const somaTotal=()=>{
  //   firebaseService.somarPrecosNaColecao('shoppingCart')
  //   setPrecototal
  // }
  


  return (
    <ScrollView>
      {products.map((products: any) => (
        <View>
          <Card >
            <Card.Title style={{ fontSize: 20, color: '#848484' }}>Finalizar Pedido</Card.Title>
            <View style={Styles.container}>
              <View>
                <Text style={Styles.text}>Total : </Text>
                <Text style={Styles.text}>Itens : {i} </Text>
              </View>
              <TouchableOpacity style={Styles.generalButtons}>
                <Text style={Styles.generalButtonsText} >Finalizar compra</Text>
              </TouchableOpacity>
            </View>
          </Card>
        </View>

      ))}
    </ScrollView>
  )
};

export default Compra;