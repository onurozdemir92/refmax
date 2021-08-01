import {Dimensions, StyleSheet} from 'react-native';
import Sizes from '../../Screen/Theme/Sizes';
const {height, width} = Dimensions.get('window');
const Styles = StyleSheet.create({
  container: {
    width: width,
    height: Sizes.MainHeader,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  button: {
    height: '100%',
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Styles;
