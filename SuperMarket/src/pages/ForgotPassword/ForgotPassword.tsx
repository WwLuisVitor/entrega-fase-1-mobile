import React from 'react'
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import Styles from '../Login/Styles'
import Animated, { Easing, FadeInLeft } from 'react-native-reanimated'

const ForgotPassword = ({ navigation }) => {
  return (
    <Animated.View entering={FadeInLeft.duration(1500).easing(Easing.ease)} style={Styles.container}>
      <TouchableOpacity onPress={() => { navigation.replace("login") }}>
        <Icon name="arrow-with-circle-left" size={50} color={"#848484"}></Icon>
      </TouchableOpacity>
      <View style={Styles.logo}>
        <Icon name="lock" size={100} color="#5F9EA0" />
        <Text style={Styles.text}>Account Recovery</Text>
      </View>
      <Text style={Styles.label}>Login</Text>
      <TextInput style={Styles.input} />
      <Text style={Styles.label}>Email</Text>
      <TextInput style={Styles.input} />
      <TouchableOpacity style={Styles.generalButtons} onPress={() => { navigation.replace("login") }}>
        <Text style={Styles.generalButtonsText}>
          Send
        </Text>
      </TouchableOpacity>
    </Animated.View>
  )
}

export default ForgotPassword