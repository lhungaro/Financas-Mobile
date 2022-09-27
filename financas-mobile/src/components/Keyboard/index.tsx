import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Key } from '../Key';
import {Feather} from '@expo/vector-icons' 


import { styles } from './styles';

let teste = 0;
let a = 2;

 class Keyboard extends Component {

    state={
        teste:''
    }

    number1 = () => this.setState({teste: + '1'})
    number2 = () => this.setState({teste: + '2'})
    number3 = () => this.setState({teste: + '3'})
    number4 = () => this.setState({teste: + '4'})
    number5 = () => this.setState({teste: + '5'})
    number6 = () => this.setState({teste: + '6'})
    number7 = () => this.setState({teste: + '7'})
    number8 = () => this.setState({teste: + '8'})
    number9 = () => this.setState({teste: + '9'})
    number0 = () => this.setState({teste: + '0'})
    point = () => this.setState({teste: + '.'})

    render() {
      return (
            <View style={styles.container}>
            <View style={styles.numberView}>
                <Text style={styles.number}>{this.state.teste}</Text>
            </View>
            <View>
                <View style={styles.line}>
                <TouchableOpacity style={styles.key} onPress={this.number1}>
                    <Text style={styles.text} >1</Text>
                </TouchableOpacity>
    
                <TouchableOpacity style={styles.key} onPress={this.number2}>
                    <Text style={styles.text} >2</Text>
                </TouchableOpacity>
    
                <TouchableOpacity style={styles.key} onPress={this.number3}>
                    <Text style={styles.text} >3</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.line}>
                <TouchableOpacity style={styles.key} onPress={this.number4}>
                    <Text style={styles.text} >4</Text>
                </TouchableOpacity>
    
                <TouchableOpacity style={styles.key} onPress={this.number5}>
                    <Text style={styles.text} >5</Text>
                </TouchableOpacity>
    
                <TouchableOpacity style={styles.key} onPress={this.number6}>
                    <Text style={styles.text} >6</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.line}>
                <TouchableOpacity style={styles.key} onPress={this.number7}>
                    <Text style={styles.text} >7</Text>
                </TouchableOpacity>
    
                <TouchableOpacity style={styles.key} onPress={this.number8}>
                    <Text style={styles.text} >8</Text>
                </TouchableOpacity>
    
                <TouchableOpacity style={styles.key} onPress={this.number9}>
                    <Text style={styles.text} >9</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.line}>
                <TouchableOpacity style={styles.key} onPress={this.number0}>
                    <Text style={styles.text} >.</Text>
                </TouchableOpacity>
    
                <TouchableOpacity style={styles.key} onPress={this.point}>
                    <Text style={styles.text} >0</Text>
                </TouchableOpacity>
    
                <TouchableOpacity style={styles.key} >
                    <Feather name="delete"></Feather>
                </TouchableOpacity>
            </View>
            </View>
            
    
            </View>
        );
    }
  }export default Keyboard


//  class Keyboard extends Component {
  



//     constructor(props) {
//         super(props);
//         this.state = {
//             teste: 0
//         };
//     }


//     number1(){
//         this.setState({teste:this.state.teste+1})
//     }

// render(){
//     return (
//       <View style={styles.container}>
//         <View style={styles.numberView}>
//             <Text style={styles.number}>{this.state.teste}</Text>
//         </View>
//         <View>
//             <View style={styles.line}>
//             <TouchableOpacity style={styles.key} onPress={number1}>
//                 <Text style={styles.text} >1</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.key}>
//                 <Text style={styles.text} >2</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.key}>
//                 <Text style={styles.text} >3</Text>
//             </TouchableOpacity>
//         </View>
//         <View style={styles.line}>
//             <TouchableOpacity style={styles.key}>
//                 <Text style={styles.text} >4</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.key}>
//                 <Text style={styles.text} >5</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.key}>
//                 <Text style={styles.text} >6</Text>
//             </TouchableOpacity>
//         </View>
//         <View style={styles.line}>
//             <TouchableOpacity style={styles.key}>
//                 <Text style={styles.text} >7</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.key}>
//                 <Text style={styles.text} >8</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.key}>
//                 <Text style={styles.text} >9</Text>
//             </TouchableOpacity>
//         </View>
//         <View style={styles.line}>
//             <TouchableOpacity style={styles.key}>
//                 <Text style={styles.text} >.</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.key}>
//                 <Text style={styles.text} >0</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.key}>
//                 <Feather name="delete"></Feather>
//             </TouchableOpacity>
//         </View>
//        </View>
       

//       </View>
//     );
//   }
// }

// export default Keyboard;

// export function Keyboard() {
//   return (
//     <View style={styles.container}>
//         <View style={styles.line}>
//             <Key number={1}></Key>
//             <Key number={2}></Key>
//             <Key number={3}></Key>
//         </View>
//         <View style={styles.line}>
//             <Key number={4}></Key>
//             <Key number={5}></Key>
//             <Key number={6}></Key>
//         </View>
//         <View style={styles.line}>
//             <Key number={7}></Key>
//             <Key number={8}></Key>
//             <Key number={9}></Key>
//         </View>
//         <View style={styles.line}>
//             <Key onClick={} number={"."}></Key>
//             <Key number={0}></Key>
//             <Key number={<Feather name="delete"></Feather>}></Key>
//         </View>
//     </View>
//   );
// }