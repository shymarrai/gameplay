import React, {useState} from 'react';
import { View, Text ,FlatList } from 'react-native';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { Background } from '../../components/Background'
import { Profile } from '../../components/Profile';
import {styles} from './styles'
import { ListDivider } from '../../components/ListDivider';

import {useNavigation} from '@react-navigation/native'

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
        owner: false
      },
      category: '2',
      date: '15/07 às 21:00h',
      description: 'Toca pra miiiim!'
    }
  ]
  const navigation = useNavigation()


  function handleCategorySelect(categoryId: string){
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }
  function handleAppointmentCreate(){
    navigation.navigate('AppointmentCreate')
  }

  function handleAppointmentDetails(){
    navigation.navigate('AppointmentDetails')
  }
  return(
    <Background>
      <View style={styles.header} >
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate}/>
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
              <Appointment data={item} 
                onPress={handleAppointmentDetails}
              />

            )}
            ItemSeparatorComponent={() => <ListDivider />}
            style={styles.matches}
            showsVerticalScrollIndicator={false}
            />
            
        </View>

    </Background>
  )
}