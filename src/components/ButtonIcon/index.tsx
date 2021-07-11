import React from 'react';
import {
Text,
Image,
View,
TouchableOpacity,
TouchableOpacityProps /* PARA PASSA AS PROPIERADE DE TOUCHABLE_OPACITY PELO COMPONENTE NA INTERFACE */
} from 'react-native'

import DiscordImg from '../../assets/discord.png'
import {styles} from './styles'

type Props = TouchableOpacityProps & {
  title?: string; /* É BOM PARA QUANDO A PROPRIEDADE NAO 
                  É OBRIGATORIA, SENDO ASSIM CASO 
                  NÃO SEJA PASSADO O COMPONENTE NAO DÁ ERRO */
}

export function ButtonIcon({title, ...rest}: Props){
  return(
    <TouchableOpacity 
    style={styles.container}
    {...rest}
    
    >
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg}
        style={styles.icon}
        />
      </View>
      <Text style={styles.title}>
        { title }
      </Text>
    </TouchableOpacity>
  )
}