import { StyleSheet } from 'react-native';
import Colors from '../Theme/Colors';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  CategoryContainer: {
    width: '100%',
    marginTop: 15,
    paddingBottom: 15,
  },
  flatlist: {
    backgroundColor: '#ECECEC',
  },
  sliderScroll: {
    paddingVertical: 5,
  },
  fullScreenSliderButtonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 3
  },
  fullScreenSliderButton: {
    width: '70%',
    paddingHorizontal: 15,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 3,
    paddingVertical: 10
  },
  fullScreenSliderButtonText: {
    color: Colors.MainColor,
    marginLeft: 10
  }
});

export default Styles;
