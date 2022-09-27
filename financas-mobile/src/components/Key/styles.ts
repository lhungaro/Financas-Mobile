import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {},
  key:{
    width: 100,
    height: 70,
    borderWidth: 2,
    borderRadius: 50,
    alignItems:'center',
    justifyContent:'center',
    borderColor: "rgba(0,0,0,0.05)"
  },text:{
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.REGULAR
  },number:{
    marginTop:150,
    height: 100,
    fontSize: 60,
    margin: 12,
    padding: 10,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    color: THEME.COLORS.PRIMARY
  }
});