import React from 'react';
import { View , Text} from 'react-native';

import { styles } from './styles';

export function BalanceFor({balance, balanceFor}) {
  return (
    <View style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.balance} > {balance}</Text>
            <Text style={styles.balanceFor} > /{balanceFor}</Text>
        </View>
    </View>
  );
}