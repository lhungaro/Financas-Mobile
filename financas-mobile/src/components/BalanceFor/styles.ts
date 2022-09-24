import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor:THEME.COLORS.BACKGROUND_800,
    height:70,
    width:100,
    MarginLeft:20,
    justifyContent:'center',
    alignItems:'center',
    padding:5,
    borderRadius:10,
  },
  content: {
    justifyContent:'center',
    alignItems:'flex-start',

  },
  balance:{
    fontFamily:THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize:THEME.FONT_SIZE.SM,
    color:'#FFFFFF'
  },
  balanceFor:{
    fontFamily:THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize:THEME.FONT_SIZE.SM,
    color:'rgba(255,255,255,0.3)',
    marginTop:5
  },
});