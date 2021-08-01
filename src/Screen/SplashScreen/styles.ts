import {StyleSheet} from 'react-native';
import Colors from '../Theme/Colors';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.MainColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: 'white',
    fontSize: 35,
  },
});

export default Styles;
