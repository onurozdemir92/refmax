import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../Theme/Colors';
const {height, width} = Dimensions.get('window');
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  priceContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 15,
  },
  priceText: {
    width: '90%',
    fontSize: 24,
    fontWeight: 'bold',
  },
  titleContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  titleText: {
    width: '90%',
    fontSize: 18,
    color: Colors.productTitleText,
  },
  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    width: '80%',
    height: 35,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.productButton,
    borderWidth: 1,
  },
  backgroundButton: {
    backgroundColor: Colors.productButton,
  },
  buttonText: {
    fontWeight: 'bold',
    color: Colors.productButton,
  },
  scrollView: {
    flex: 1,
  },
  locationContainer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 15,
  },
  locationButton: {
    flexDirection: 'row',
    height: 30,
    alignItems: 'center',
    width: '75%',
    justifyContent: 'space-between',
  },
  locationIconText: {
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
  },
  pointerContainer: {
    width: '100%',
    alignItems: 'center',
  },
  pointer: {
    width: '90%',
    borderWidth: 1,
    borderColor: Colors.pointerColor,
  },
});

export default Styles;
