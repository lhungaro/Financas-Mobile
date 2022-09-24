import React from 'react';
import { View ,StyleSheet , Text, StatusBar, TouchableOpacity} from 'react-native';

import { styles } from './styles';

import {Feather} from '@expo/vector-icons' 

export function Header({name}) {
  return (
    <View style={styles.container}>
        <StatusBar  translucent backgroundColor={styles.container.backgroundColor}/>
        <View style={styles.content}>

            <Text style={styles.username}>{name}</Text>
            
            <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                <Feather name='user' size={29} color='#FFF' />
            </TouchableOpacity>
            
            

        </View>
    </View>
  );
}