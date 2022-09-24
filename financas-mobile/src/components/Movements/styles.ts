import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    padding:15,
    flex:1,
    marginBottom:24,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0,0,0,0.2)'
  },
  text:{
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center'
  },
  content:{
    flexDirection:'row',
    justifyContent: 'space-between'

  },
  icon:{
    margin :5
  },
  label:{
    fontFamily:THEME.FONT_FAMILY.REGULAR
  },
  value:{
    fontFamily:THEME.FONT_FAMILY.BOLD,
    color: 'red'
  },
  value2:{
    fontFamily:THEME.FONT_FAMILY.BOLD,
    color: 'green'
  }
});