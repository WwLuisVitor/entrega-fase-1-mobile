import React from 'react'
import { Text } from 'react-native'

interface Favorite {
    favorites: [string];
    
  }

const Favorites = () => {
    return (
        <Text>Favorite</Text>
        //For each product in 'Products' compare === id se for igual, exibir,se nao for ignorar
        // [document1,document2,document3] product.map === 'document1' = 'document1'  document2 document2,  document3 document3 
        //exibe :document1 document2
        
    )
}

export default Favorites