import {Dimensions, StyleSheet} from 'react-native';
const {height} = Dimensions.get('window');
const Styles = StyleSheet.create({
  container: {
    width: '100%',
    height: height * 0.08,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
});

export default Styles;
