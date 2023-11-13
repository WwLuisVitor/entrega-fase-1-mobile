import React from 'react'
import {TouchableOpacity, View } from 'react-native'
import { Text } from 'react-native'
import Styles from '../Login/Styles'
import Icon from 'react-native-vector-icons/Entypo'
import { TextInput } from 'react-native'
import Animated, { Easing, FadeIn, FadeInLeft, FadeInRight } from 'react-native-reanimated'

const CreateAccount = ({ navigation }:any) => {
    return (
        <Animated.ScrollView entering={FadeInRight.duration(600).easing(Easing.ease)}>
            <View style={Styles.container}>
                <View style={Styles.AccountCreation}>
                    <Icon name="user" size={100} color="#5F9EA0" />
                    <Text style={Styles.text}>Account Creation</Text>
                </View>
                <Text style={Styles.label}>Full name</Text>
                <TextInput style={Styles.input} />
                <Text style={Styles.label}>Email</Text>
                <TextInput style={Styles.input} />
                <Text style={Styles.label}>Login</Text>
                <TextInput style={Styles.input} />
                <Text style={Styles.label}>Password</Text>
                <TextInput secureTextEntry={true} style={Styles.input} />
                <Text style={Styles.label}>Confirm your password</Text>
                <TextInput secureTextEntry={true} style={Styles.input} />
                <TouchableOpacity style={Styles.generalButtons} onPress={() => { navigation.replace("Login") }}>
                    <Text style={Styles.generalButtonsText}>
                        Create
                    </Text>
                </TouchableOpacity>
            </View>
        </Animated.ScrollView>
    )
}
export default CreateAccount