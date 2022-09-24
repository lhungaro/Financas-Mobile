import { StatusBar } from 'expo-status-bar';
import { View , Text, FlatList} from 'react-native';
import { Header } from '../../components/Header';
import { styles } from './styles';
import { Balance } from '../../components/Balance';
import { BalanceFor } from '../../components/BalanceFor';
import { AddCash } from '../../components/AddCash';
import { Movements } from '../../components/Movements';

const list= [
  {
    id:1,
    label: 'Boleto de conta de Luz',
    value: '300,90',
    date:'17/09/2022',
    type:0 //saida
  },
  {
    id:2,
    label: 'Salário',
    value: '2.500,00',
    date:'17/09/2022',
    type:1 //entrada
  },
  {
    id:3,
    label: 'Aluguel',
    value: '910,20',
    date:'17/09/2022',
    type:0
  },
  {
    id:4,
    label: 'Boleto de conta de Água',
    value: '352,10',
    date:'17/09/2022',
    type:0
  },
  {
    id:5,
    label: 'Boleto de conta de Água',
    value: '352,10',
    date:'17/09/2022',
    type:0
  },
  {
    id:6,
    label: 'Boleto de conta de Água',
    value: '352,10',
    date:'17/09/2022',
    type:0
  },
  {
    id:7,
    label: 'Boleto de conta de Água',
    value: '352,10',
    date:'17/09/2022',
    type:0
  },
  {
    id:8,
    label: 'Boleto de conta de Água',
    value: '352,10',
    date:'17/09/2022',
    type:0
  },
  {
    id:9,
    label: 'Boleto de conta de Água',
    value: '352,10',
    date:'17/09/2022',
    type:0
  },
]

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.balance}>
        <Header name="Username"/>
        <Balance></Balance>
          <View style={styles.balanceList}>
            <BalanceFor balance="R$ 500,00" balanceFor={"day"}></BalanceFor>
            <BalanceFor balance="R$ 210,00" balanceFor={"month"}></BalanceFor>
            <BalanceFor balance="R$ 150,00" balanceFor={"year"}></BalanceFor>
          </View>
          <AddCash></AddCash>
      </View>
      <View style={styles.informations}>

        <FlatList 
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => <Movements data={item }/>}>
        
        </FlatList>
      
      </View>
    </View>
  );
}


