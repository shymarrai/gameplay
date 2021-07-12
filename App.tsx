import React from "react";
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';

import { useFonts } from 'expo-font' 
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani'

import { Routes } from './src/routes'
import { Background } from './src/components/Background'

export default function App(){
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if(!fontsLoaded) {
    return <AppLoading /> /* MOSTRA A TELA DE SPLASH DO APP ENQUANTO AS FONTES NÃO CARREGAREM */
  }

  return(
    <Background>
      <StatusBar 
      barStyle='light-content' /* TEMA PARA A BARRA DE STATUS */
      backgroundColor='transparent' /* BACKGROUND DA BARRA */
      translucent /* EXPLICITANDO QUE A BARRA DE STATUS É GRUDADA NO APP */
      />

      <Routes />
      
    </Background>
  )
}