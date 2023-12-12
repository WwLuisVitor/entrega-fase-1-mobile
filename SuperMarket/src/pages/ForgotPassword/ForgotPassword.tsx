import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import Styles from '../Login/Styles'
import Animated, { Easing, FadeInRight } from 'react-native-reanimated'

const ForgotPassword = ({ navigation }: any) => {
  return (
    <Animated.View entering={FadeInRight.duration(600).easing(Easing.ease)} style={Styles.container}>
      <View style={Styles.logo}>
        <Icon name="lock" size={100} color="#5F9EA0" />
        <Text style={Styles.text}>Account Recovery</Text>
      </View>
      <Text style={Styles.label}>Email</Text>
      <TextInput style={Styles.input} />
      <TouchableOpacity style={Styles.generalButtons} onPress={() => { navigation.replace("Login") }}>
        <Text style={Styles.generalButtonsText}>
          Send
        </Text>
      </TouchableOpacity>
    </Animated.View>
  )
}

export default ForgotPassword