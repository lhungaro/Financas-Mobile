import React from 'react';
import { View ,Text, TouchableOpacity} from 'react-native';

import { styles } from './styles';
import {Feather} from '@expo/vector-icons' 

export function AddCash() {
  return (
    <View style={styles.container}>
        
        <TouchableOpacity style={styles.content}>
            <Feather name='trending-up' style={styles.icon}></Feather>
            <Text style={styles.text}> add cash </Text>
        </TouchableOpacity>

        <View style={styles.divider}></View>

        <TouchableOpacity style={styles.content}>
            <Feather name='trending-down' style={styles.icon}></Feather>
            <Text style={styles.text}> cash out </Text>
        </TouchableOpacity>
    </View>
  );
}