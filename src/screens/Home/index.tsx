import React, {useState} from 'react';
import { View, Text ,FlatList } from 'react-native';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';

import { Profile } from '../../components/Profile';
import {styles} from './styles'
import { ListDivider } from '../../components/ListDivider';

export function Home(){
  const [category, setCategory] = useState('')
  const appointment = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lolzin',
        icon: null,
        owner: true
      },
      category: '1',
      date: '12/07 às 20:40h',
      description: 'É hoje q eu saio do prata!'
    },
    {
      id: '2',
      guild: {
        id: '2',
        name: 'BrawlStars',
        icon: null,
        owner: true
      },
      category: '2',
      date: '15/07 às 21:00h',
      description: 'Toca pra miiiim!'
    }
  ]


  function handleCategorySelect(categoryId: string){
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }
  return(
    <View>
      <View style={styles.header} >
        <Profile />
        <ButtonAdd />
      </View>

        <CategorySelect 
          categorySelected={category}
          setCategory={handleCategorySelect}
        />
        <View style={styles.content}>
          <ListHeader title="Partidas agendadas" subtitle="Total 6" />

          <FlatList 
            data={appointment} 
            keyExtractor={item => item.id} 
            renderItem={({item}) => (
              <Appointment data={item}/>

            )}
            ItemSeparatorComponent={() => <ListDivider />}
            style={styles.matches}
            showsVerticalScrollIndicator={false}
            />
            
        </View>

    </View>
  )
}