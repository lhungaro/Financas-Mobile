import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    justifyContent:'space-around',
    marginStart:25,
    marginEnd:25
  },
  icon:{
    marginBottom:5,
    fontSize:THEME.FONT_SIZE.MD,
    color:'#FFFFFF',
  },
  text:{
    fontSize:THEME.FONT_SIZE.SM,
    fontFamily:THEME.FONT_FAMILY.REGULAR,
    color:'rgba(255,255,255,0.5)',

  },
  content:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    padding:30
  },
  divider:{
    backgroundColor:'rgba(255,255,255,0.2)',
    width:0.5,
    marginTop:25,
    marginBottom:25,

  }
});