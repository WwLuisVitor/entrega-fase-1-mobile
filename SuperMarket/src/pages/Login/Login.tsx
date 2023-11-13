import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import Styles from './Styles'
import Icon from 'react-native-vector-icons/AntDesign'
import Animated, { Easing, FadeInRight } from 'react-native-reanimated'

const Login = ({ navigation }: any) => {
    const goToPage = (path: String) => {
        navigation.navigate(path)
    }
    return (
        <Animated.View entering={FadeInRight.duration(600).easing(Easing.ease)} style={Styles.container}>
            <View style={Styles.logo}>
                <Icon name="isv" size={100} color="#5F9EA0" />
                <Text style={Styles.text}>SuperMarket</Text>
            </View>
            <Text style={Styles.label}>Login</Text>
            <TextInput style={Styles.input} />
            <Text style={Styles.label}>Password</Text>
            <TextInput secureTextEntry={true} style={Styles.input} />
            <View style={Styles.createAccountForgot}>
                <Text onPress={() => { goToPage("createAccount") }} style={Styles.link}>Create Account</Text>
                <Text onPress={() => { goToPage("forgotPassword") }} style={Styles.link}>Forgot Password</Text>
            </View>
            <TouchableOpacity style={Styles.generalButtons} onPress={() => { goToPage("home") }}>
                <Text style={Styles.generalButtonsText}>
                    Login
                </Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default Login