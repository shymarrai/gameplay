import React from 'react';
import { ImageBackground, Text, View, FlatList } from 'react-native';
import { styles } from './styles'
import BannerImg from '../../assets/banner.png'


import { Fontisto } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Header } from '../../components/Header'
import { Background } from '../../components/Background'
import { ListHeader } from '../../components/ListHeader'
import { ButtonIcon } from '../../components/ButtonIcon'
import { theme } from '../../global/styles/theme';
import { Member } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';

export function AppointmentDetails(){
  const members = [
    {
      id: '1',
      username: 'Bruno',
      avatar_url: 'https://github.com/shymarrai.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'Shymarrai',
      avatar_url: 'https://scontent.fqnv5-1.fna.fbcdn.net/v/t31.18172-8/12401702_1095317417153473_6885579374290987208_o.jpg?_nc_cat=107&ccb=1-3&_nc_sid=19026a&_nc_eui2=AeEiIA0Pa5mG2BYYs8GcjmFgzlrJQtni3d_OWslC2eLd39qF9-kpXaSTkHEY6Qg9i2DyURuzbH7aMswC5WsBhpBa&_nc_ohc=O80m7vsEyOUAX9WV6ji&_nc_ht=scontent.fqnv5-1.fna&oh=e78ea0e55d0b4a0cd69d125af7434ad9&oe=60F33FC1',
      status: 'online'
    },
    {
      id: '3',
      username: 'Devonico',
      avatar_url: 'data:image/jpeg;base64,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',
      status: 'ocupado'
    },
    {
      id: '4',
      username: 'Anomally',
      avatar_url: 'https://i.ibb.co/rmzr4vB/pp.jpg',
      status: 'ocupado'
    },
    {
      id: '5',
      username: 'Hayato',
      avatar_url: 'https://pbs.twimg.com/media/ERz8R6EWsAEX4wM.jpg',
      status: 'online'
    },
    {
      id: '6',
      username: 'Gaby',
      avatar_url: 'https://scontent.fqnv5-1.fna.fbcdn.net/v/t1.6435-9/73103821_1308716079288327_8132146466144649216_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGnXWAM71G424C2baaRVPvtSyTUosFsI81LJNSiwWwjzbX8WtSFMvukXKWTndJ_XbfzxFJpopMh2pu0yY5SdAYN&_nc_ohc=p0DNmzEAKTsAX90IjVR&tn=bjax2mTSkmU7xPU4&_nc_ht=scontent.fqnv5-1.fna&oh=9e82da5fb5baa22993419df64c6a0aa8&oe=60F29E69',
      status: 'online'
    },
    {
      id: '7',
      username: 'Yahiko0',
      avatar_url: 'https://static.wikia.nocookie.net/stevenuniverso/images/8/89/Garnet_With_Rings_by_TheOffColors.png/revision/latest/smart/width/250/height/250?cb=20210102164547&path-prefix=pt-br',
      status: 'online'
    },

  ]

  return(
    <Background>
      <Header title={'Detalhes'}
        action={
          <BorderlessButton>
            <Fontisto 
              name='share'
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />
      <ImageBackground 
      style={styles.banner}
      source={BannerImg}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            Lolzin
          </Text>
          <Text style={styles.subtitle}>
            É hoje que eu saio do prata!
          </Text>
        </View>
      </ImageBackground>

      <ListHeader 
        title="Jogadores"
        subtitle="total 7"
      />

      <FlatList 
        data={members}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Member data={item} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />
      <View style={styles.footer}>
        <ButtonIcon title={"Entrar na partida"}/>
      </View>
    </Background>
  )
}