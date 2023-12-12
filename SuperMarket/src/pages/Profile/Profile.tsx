// Profile.js
import React, { useEffect, useState } from 'react';
import { getCurrentUser } from '../../../userStore';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements'
import Styles from './Styles'

// Defina um tipo para o objeto de usuário
interface UserProfile {
  email: string;
  fullName: string;
  image: string;
}

function Profile() {
  const [profileData, setProfileData] = useState<UserProfile | null>(null);

  useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      setProfileData(user);
    }
  }, []);

  return (
    <ScrollView>

      <Card>
        <Card.Title style={{ fontSize: 20, color: '#848484' }}>Perfil do Usuário</Card.Title>
        <Card.Divider />
        <View style={Styles.container}>
          {profileData ? (
            <>
              {profileData.image && (
                <Image
                  source={{ uri: profileData.image }}
                  style={Styles.image}
                />
              )}

              <Text style={Styles.text}>Nome Completo : </Text>
              <Text style={Styles.text2}>{profileData.fullName}</Text>
              <Text style={Styles.text}>Email :</Text>
              <Text style={Styles.text2}>{profileData.email}</Text>
              <TouchableOpacity style={Styles.generalButtons}>

                <Text style={Styles.generalButtonsText}>Ir para Favoritos</Text>
              </TouchableOpacity>





              {/* Adicione mais informações do perfil conforme necessário */}

              {/* Adicione botões ou links para editar o perfil, fazer logout, etc. */}
            </>
          ) : (
            <Text>Carregando perfil...</Text>
          )}
        </View>
      </Card>
    </ScrollView>
  );
}

export default Profile;
