import React, { useState } from 'react';
import { Text, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { styles } from './styles'

import { Feather }  from '@expo/vector-icons'
import { Header } from '../../components/Header'
import { Background } from '../../components/Background'
import { SmallInput } from '../../components/SmallInput'
import { theme } from '../../global/styles/theme';
import { CategorySelect } from '../../components/CategorySelect';
import { RectButton } from 'react-native-gesture-handler';
import { GuildIcon } from '../../components/GuildIcon';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';

export function AppointmentCreate(){
  const [category, setCategory] = useState('')
  return(
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView >
        <Header title={'Agendar Partida'}/>
        <Text style={[styles.label, {marginLeft:24, marginTop:36, marginBottom:18}]}>
          Categoria
        </Text>
        <CategorySelect 
          hasCheckedBox
          setCategory={setCategory}
          categorySelected={category}
          />
          <View style={styles.form}>
            <RectButton>
              <View style={styles.select}>
                {
                  // <View style={styles.image}/>
                  <GuildIcon id='2'/>
                }

                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    Selecione um servidor
                  </Text>
                </View>
                  <Feather 
                    name="chevron-right"
                    color={theme.colors.heading}
                    size={18}
                  />
              </View>
            </RectButton>


            <View style={styles.field}>
              <View>
                <Text style={styles.label}>
                  Dia e mês
                </Text>

                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>
                    /
                  </Text>
                  <SmallInput maxLength={2}/>
                </View>
              </View>

              <View>
                <Text style={styles.label}>
                  Hora e minuto 
                </Text>

                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>
                    :
                  </Text>
                  <SmallInput maxLength={2}/>
                </View>
              </View>

            </View>
            <View style={[styles.field, {marginBottom: 12}]}>
              <Text style={styles.label}>
                Descrição
              </Text>
              <Text style={styles.caracteresLimit}>
                max 100 caracteres
              </Text>
            </View>

            <TextArea 
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
            />
          </View>
          <View style={styles.footer}>
            <Button title="Agendar"/>
          </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}