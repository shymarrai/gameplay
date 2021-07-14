import React from 'react';
import { Image } from 'react-native';
import { styles } from './styles'
import lol  from '../../assets/lolzin.png'
import brawlstars  from '../../assets/brawlstars.jpg'
type Props = {
  id: string,
}

export function GuildIcon({ id }: Props){
  const uri = id === '1'? lol : brawlstars
  return(
      <Image 
      source={uri}
      style={styles.image} 
      resizeMode="cover"
      />
  )
}