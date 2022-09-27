import React from 'react';
import { View , Text} from 'react-native';
import UselessTextInput from '../../components/Input';
import Keyboard from '../../components/Keyboard'
import { styles } from './styles';

export function AddCash() {
  return (
    <View style={styles.container}>
       <UselessTextInput></UselessTextInput>
      <Keyboard></Keyboard>
    </View>
  );
}