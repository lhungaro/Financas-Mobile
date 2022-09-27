import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {marginTop:60},
  line:{
    flexDirection:'row',
    justifyContent: 'space-around',
    padding:5,
    paddingStart:20,
    paddingEnd:20,
  },
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
  },
  number:{
    fontSize: 60,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    color: THEME.COLORS.PRIMARY
  },
  numberView:{
    alignItems:'center',
    margin:60
  }
});