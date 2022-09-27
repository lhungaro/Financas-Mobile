import React from 'react';
import { View ,Text, TouchableOpacity} from 'react-native';

import { styles } from './styles';

export function Key({number}) {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.key}>
            <Text style={styles.text} >{number}</Text>
        </TouchableOpacity>
    </View>
  );
}