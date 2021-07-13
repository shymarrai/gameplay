import React from 'react';
import { Image } from 'react-native';
import { styles } from './styles'
import discord  from '../../assets/illustration.png'

export function GuildIcon(){
  const uri = discord
  return(
      <Image 
      source={uri}
      style={styles.image} 
      resizeMode="cover"
      />
  )
}