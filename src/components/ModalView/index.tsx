import React, { ReactNode } from 'react';
import { View, TouchableWithoutFeedback, Modal, ModalProps } from 'react-native';

import { styles } from './styles'
import { Background } from '../Background';

type Props = ModalProps &{
  children: ReactNode;
  closeModal: () => void
}

export function ModalView({children,closeModal, ...rest}: Props){
  return(
    <Modal
      transparent     /* OVERLAY DO MODAL */
      animationType="slide" /* ANIMAÇÃO DO MODAL ABRINDO OU FECHANDO */
      statusBarTranslucent /* PARA A BARRA TAMBEM SER AFETADA PEO OVERLAY DE MODAL */
      { ...rest }
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>
              <View style={styles.bar} />
              { children }
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>

    </Modal>
  )
}