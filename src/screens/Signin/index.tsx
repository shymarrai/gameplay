import React from 'react';
import {
  View, 
  Text, 
  Image,
  Alert
} from 'react-native'

import { useAuth } from '../../hooks/auth'
import { styles } from './styles'
import { ButtonIcon } from '../../components/ButtonIcon'
import { Background } from '../../components/Background'
import IllustrationImg from '../../assets/illustration.png'

export function SignIn(){
  const { user, signIn } = useAuth()

  async function handleSignIn(){
    try{
      await signIn()
      console.log(user)
    }catch(e){
      Alert.alert(e)
    }
  }

  return(
    <Background>
      <View style={styles.container}>

        <Image 
          source={IllustrationImg} 
          style={styles.image}
          // resizeMode='stretch'
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {'\n'}
            e organize {'\n'}
            suas jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {`\n`}
            favoritos com seus amigos
          </Text>

          <ButtonIcon title="Entrar com Discord" onPress={handleSignIn}/>
        </View>
      </View>
    </Background>
  )
}