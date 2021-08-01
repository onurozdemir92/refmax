import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../Screen/Theme/Colors';

const {width} = Dimensions.get('window');

const Styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    
  },
  subContainer: {
    width: width * 0.7,
    backgroundColor: Colors.sliderBackground,
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'space-around',
  },
});

export default Styles;
