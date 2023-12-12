import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import Styles from './Styles'
import Icon from 'react-native-vector-icons/AntDesign'
import Animated, { Easing, FadeInRight } from 'react-native-reanimated'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { setCurrentUser } from '../../../userStore';
import{setidDocument} from '../../../idDocument'



const Login = ({ navigation }: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async () => {
        try {
            const db = getFirestore();
            const usersRef = collection(db, 'UserInfo');
            const q = query(usersRef, where('email', '==', email), where('password', '==', password));
            
            const querySnapshot = await getDocs(q);
      
            if (querySnapshot.size > 0) {
              // Usuário autenticado com sucesso
              console.log('Usuário autenticado:');
              setCurrentUser(querySnapshot.docs[0].data());
              const userId = querySnapshot.docs[0].id;
              console.log('ID DO USUARIO NO FIREBASE',userId);
             setidDocument(querySnapshot.docs[0].id);

             
              
              navigation.navigate('home');
            } else {
              console.error('Credenciais inválidas');
              // Adicione lógica para lidar com credenciais inválidas, exibir uma mensagem de erro, etc.
            }
          } catch (error) {
            console.error('Erro ao autenticar o usuário:', error);
            // Adicione lógica para lidar com o erro, exibir uma mensagem de erro, etc.
          }
        };
      
      
      
     
    const goToPage = (path: String) => {
        navigation.navigate(path)
    }
    return (
        <Animated.View entering={FadeInRight.duration(600).easing(Easing.ease)} style={Styles.container}>
            <View style={Styles.logo}>
                <Icon name="isv" size={100} color="#5F9EA0" />
                <Text style={Styles.text}>SuperMarket</Text>
            </View>
            <Text style={Styles.label}>Email</Text>
            <TextInput
                style={Styles.input}
                value={email}
                onChangeText={(text) => setEmail(text)}
                
            />
            <Text style={Styles.label}>Password</Text>
            <TextInput
                secureTextEntry={true}
                style={Styles.input}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <View style={Styles.createAccountForgot}>
                <Text onPress={() => { goToPage("createAccount") }} style={Styles.link}>Create Account</Text>
                <Text onPress={() => { goToPage("forgotPassword") }} style={Styles.link}>Forgot Password</Text>
            </View>
            <TouchableOpacity style={Styles.generalButtons} onPress={handleLogin}>
                <Text style={Styles.generalButtonsText}>
                    Login
                </Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default Login