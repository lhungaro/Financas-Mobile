import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  informations:{
    backgroundColor:'#FFFFF',
  },
  balance:{
    backgroundColor:THEME.COLORS.BACKGROUND_900,
  },
  balanceList:{
    flexDirection:'row',
    justifyContent:'space-around',
    paddingStart:20,
    paddingEnd:20,
  },
  list:{

  }
});