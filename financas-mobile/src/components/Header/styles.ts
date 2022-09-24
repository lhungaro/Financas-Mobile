import { StyleSheet , StatusBar} from 'react-native';
import { THEME } from '../../theme';

const statusBarHeigth = StatusBar.currentHeight ?  StatusBar.currentHeight +22 : 64;


export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    paddingTop: statusBarHeigth,
    flexDirection: 'row',
    padding: 20,
  },
  username :{
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.MD,
    fontWeight: 'bold'
  },
  content:{
    flex:1,
    alignItems: 'center',
    flexDirection : 'row',
    justifyContent: 'space-between'
  },
  buttonUser:{
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 44/2,
    height:50,
    width:50,
    alignItems:'center',
    justifyContent:'center'
  }
});