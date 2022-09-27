import { View , Text} from 'react-native';

import { styles } from './styles';

export function Balance() {
  return (
    <View style={styles.container}>

        <View style={styles.item}>

            <View style={styles.textBalance}>
                <Text style={styles.itemTitle}>Saldo</Text>
                <View style={styles.line}/>
            </View>

                <View style={styles.content}>
                    <View style={styles.line}/>
                    <Text style={styles.currencySimbol}>R$ </Text>
                    <Text style={styles.balance}>2,00</Text>
                </View>

        </View>

        <View style={styles.item}>

            <View style={styles.textBalance}>
                <Text style={styles.itemTitle}>Gastos</Text>
                <View style={styles.line}/>
            </View>
            <View style={styles.content}>
                    <Text style={styles.currencySimbol}>R$ </Text>
                    <Text style={styles.balance}>5.000,00</Text>
            </View>

        </View>

    </View>
  );
}