import React from 'react';
import { Text } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import {styles} from './styles'

type Props = RectButtonProps & {
  title?: string; /* É BOM PARA QUANDO A PROPRIEDADE NAO 
                  É OBRIGATORIA, SENDO ASSIM CASO 
                  NÃO SEJA PASSADO O COMPONENTE NAO DÁ ERRO */
}

export function Button({title, ...rest}: Props){
  return(
    <RectButton 
    style={styles.container}
    {...rest}
    
    >
      <Text style={styles.title}>
        { title }
      </Text>
    </RectButton>
  )
}