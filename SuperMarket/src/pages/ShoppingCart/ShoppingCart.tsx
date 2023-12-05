import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View, Button, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import Styles from '../Login/Styles';

const ShoppingCart = ({ route }: any) => {
    const { shoppingCart, removeItem, removeAllItem } = route.params;
    const [cartItems, setCartItems] = useState(shoppingCart);

    const handleRemove = (index: number) => {
        const updateList = [...cartItems]
        updateList.splice(index, 1);
        removeItem(index)
        setCartItems(updateList)
    };

    const removeAllItems = () => {

        setCartItems([]);
    };



    return (
        <ScrollView>
            {cartItems.map((prod: any, i: number) => (
                <View key={i}>
                    <Card>
                        <Card.Title style={{ fontSize: 20, color: '#848484' }}>{prod.name}</Card.Title>
                        <Card.Divider />
                        <Card.Image source={{ uri: prod.image }} />
                        <View style={Styles.viewShopCart}>
                            <View>
                                <Text style={Styles.productDescriptionText}>Price: {prod.price}</Text>
                                <Text style={Styles.productDescriptionText}>Description: {prod.desc}</Text>
                            </View>

                            <TouchableOpacity style={Styles.generalButtons}
                                onPress={() => handleRemove(i)}>
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
