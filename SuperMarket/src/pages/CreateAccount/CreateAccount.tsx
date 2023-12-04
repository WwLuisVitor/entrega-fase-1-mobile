import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Text } from 'react-native'
import Styles from '../Login/Styles'
import Icon from 'react-native-vector-icons/Entypo'
import { TextInput } from 'react-native'
import Animated, { Easing, FadeIn, FadeInLeft, FadeInRight } from 'react-native-reanimated'
import firebaseService from '../../services/firebaseServices'

const CreateAccount = ({ navigation }: any) => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const onSubmit = async () => {
        const data = { fullName, email, login, password }
        firebaseService.save(data,'UserInfo')
    }
    return (
        <Animated.ScrollView entering={FadeInRight.duration(600).easing(Easing.ease)}>
            <View style={Styles.container}>
                <View style={Styles.AccountCreation}>
                    <Icon name="user" size={100} color="#5F9EA0" />
                    <Text style={Styles.text}>Account Creation</Text>
                </View>
                <Text style={Styles.label}>Full name</Text>
                <TextInput
                    style={Styles.input}
                    value={fullName}
                    onChange={(event) => (setFullName(event.nativeEvent.text))} />
                <Text style={Styles.label}>Email</Text>
                <TextInput
                    style={Styles.input}
                    value={email}
                    onChange={(event) => (setEmail(event.nativeEvent.text))} />
                <Text style={Styles.label}>Login</Text>
                <TextInput
                    style={Styles.input}
                    value={login}
                    onChange={(event) => (setLogin(event.nativeEvent.text))} />
                <Text style={Styles.label}>Password</Text>
                <TextInput
                    secureTextEntry={true}
                    style={Styles.input}
                    value={password}
                    onChange={(event) => (setPassword(event.nativeEvent.text))} />
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