import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../Screen/Theme/Colors';
const {height, width} = Dimensions.get('window');
const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
  },
  scrollContainer: {
    width: width,
    height: height * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: '100%',
    borderRadius: 10,
  },
  imageCountContainer: {
    width: 70,
    height: 25,
    backgroundColor: Colors.imageCountContainer,
    position: 'absolute',
    bottom: 10,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  imageCountText: {
    color: 'white',
  },
});

export default Styles;
