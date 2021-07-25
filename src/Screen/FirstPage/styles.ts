import {StyleSheet} from 'react-native';
import Colors from '../Theme/Colors';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  CategoryContainer: {
    width: '100%',
    marginTop: 10,
  },
  flatlist: {
    backgroundColor: Colors.backgroundColor,
  },
  sliderScroll: {
    paddingVertical: 5,
  },
});

export default Styles;
