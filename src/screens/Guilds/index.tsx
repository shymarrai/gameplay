import React from 'react';
import { View, FlatList } from 'react-native';
import { styles } from './styles'


import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

type Props = {
  handleGuildSelect: (guild: GuildProps) => void
}

export function Guilds({handleGuildSelect}: Props){
  const guilds = [
    {
      id: '1',
      name: 'League of Legends',
      icon: null,
      owner: true
    },
    {
      id: '2',
      name: 'BrawlStars',
      icon: null,
      owner: true
    },
    {
      id: '3',
      name: 'BrawlStars',
      icon: null,
      owner: true
    },
    {
      id: '4',
      name: 'BrawlStars',
      icon: null,
      owner: true
    },
    {
      id: '5',
      name: 'BrawlStars',
      icon: null,
      owner: true
    },
    {
      id: '6',
      name: 'BrawlStars',
      icon: null,
      owner: true
    }
  ]
  
  return(
    <View style={styles.container}>
    <FlatList
      data={guilds}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <Guild 
          data={item}
          onPress={() => handleGuildSelect(item)}
        />
      )}
        ItemSeparatorComponent={() => <ListDivider  isCentered />}
        ListHeaderComponent={() => <ListDivider isCentered />}
        contentContainerStyle={{paddingBottom:69, paddingTop:100}}
        style={styles.guilds}
    />
    </View>
  )
}