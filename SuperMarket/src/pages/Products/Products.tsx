import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import firebaseService from '../../services/firebaseServices'

const Products = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {

    const fetchData = async () => {
      const prodResult: any = await firebaseService.findAll('Product')
      setProducts(prodResult)
    }
    fetchData()
  }, [])
  return (
    <View>
      {
        products.map((product: any) => (
          <Text>{product.name}</Text>
        ))
      }

    </View>
  )
}

export default Products