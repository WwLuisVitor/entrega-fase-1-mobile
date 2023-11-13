import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View, Button } from 'react-native';
import { Card } from 'react-native-elements';
import Styles from '../Login/Styles';

const ShoppingCart = ({ route }: any) => {
    const { shoppingCart } = route.params;
    const [cartItems, setCartItems] = useState(shoppingCart);

    const removeItem = (index: number) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        setCartItems(updatedCart);
    };

    const removeAllItems = () => {
        setCartItems([]);
    };

    useEffect(() => {
        setCartItems(shoppingCart);
    }, [shoppingCart]);

    return (
        <ScrollView>
            {cartItems.map((prod: any, i: number) => (
                <View key={i}>
                    <Card>
                        <Card.Title style={{ fontSize: 20, color: '#848484' }}>{prod.name}</Card.Title>
                        <Card.Divider />
                        <Card.Image source={{ uri: prod.image }} />
                        <View style={Styles.productDescriptionView}>
                            <Text style={Styles.productDescriptionText}>Price: {prod.price}</Text>
                            <Text style={Styles.productDescriptionText}>Description: {prod.desc}</Text>
                            <Button title="Remove Item" onPress={() => removeItem(i)} />
                        </View>
                    </Card>
                </View>
            ))}
            {cartItems.length > 0 && (
                <View style={{ margin: 10 }}>
                    <Button title="Remove All Items" onPress={removeAllItems} />
                </View>
            )}
        </ScrollView>
    );
};

export default ShoppingCart;
