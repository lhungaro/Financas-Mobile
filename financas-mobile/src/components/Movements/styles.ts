import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    padding:15,
    flex:1,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0,0,0,0.2)'
  },
  date:{
    fontSize: 13,
    paddingBottom: 2,
    paddingTop: 2,
    fontFamily:THEME.FONT_FAMILY.BOLD,
    color: 'rgba(0,0,0,0.3)'

  },
  text:{
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center'
  },
  content:{
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center'
  },
  icon:{
    margin :5
  },
  label:{
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily:THEME.FONT_FAMILY.BOLD
  },
  sublabel:{
    fontSize: 13,
    fontFamily:THEME.FONT_FAMILY.SEMI_BOLD,
    color: 'rgba(0,0,0,0.3)'
  },
  value:{
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily:THEME.FONT_FAMILY.BOLD,
    color: 'red'
  },
  value2:{
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily:THEME.FONT_FAMILY.BOLD,
    color: 'green'
  },
  labels:{
    marginTop:6
  }
});