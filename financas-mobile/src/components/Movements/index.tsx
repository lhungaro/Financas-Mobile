import React from 'react';
import { TouchableOpacity, View,Text } from 'react-native';
import {Feather} from '@expo/vector-icons' 

import { styles } from './styles';

export function Movements({data}) {
  return (
    <TouchableOpacity style={styles.container}>
        <Text style={styles.date}> {data.date}</Text>
        
        <View style={styles.content}>
            
            <View style={styles.text}>
       
                {/* {data.type == 1 ?  <Feather name='chevrons-up' size={29}   style={styles.text}/> :
                <Feather name='chevrons-down' size={29}   style={styles.icon}/>
                } */}
                <View style={styles.labels}>

                    <Text style={styles.label}> {data.label}</Text>
                    <Text style={styles.sublabel}> {data.local}</Text>
                </View>
            </View>
                
            {data.type == 1 ? <Text style={styles.value2}> R$ {data.value}</Text> :
            <Text style={styles.value}> R$ {data.value}</Text>}
        
        </View>

       
    </TouchableOpacity>
  );
}