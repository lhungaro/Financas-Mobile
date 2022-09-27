import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    justifyContent:'space-between',
    paddingStart: 18,
    paddingEnd: 18,
    margin: 5
  },
  itemTitle:{
   fontFamily:THEME.FONT_FAMILY.REGULAR,
   fontSize:THEME.FONT_SIZE.SM, 
    color:'#FFFFFF'
  },
  currencySimbol:{
    fontFamily:THEME.FONT_FAMILY.REGULAR,
    fontSize:THEME.FONT_SIZE.LG,
    color:'#FFFFFF'
  },
  balance:{
    fontFamily:THEME.FONT_FAMILY.BOLD,
    fontSize:THEME.FONT_SIZE.LG,
    color:'#FFFFFF'
  },
  item:{
    flexDirection:'column',
    marginBottom:25,
  },
  content:{
    flexDirection:'row',
  },
  textBalance:{
    flexDirection:'column',
    marginBottom:20
  },
  line:{
    marginTop:5,
    height:0.3,
    backgroundColor:'rgba(255,255,255,0.5)'
  } 
});