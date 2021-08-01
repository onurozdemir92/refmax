import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../Screen/Theme/Colors';

const {height, width} = Dimensions.get('window');
const Styles = StyleSheet.create({
  container: {
    width: width / 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 3,
    padding: 5,
  },
  subContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    
  },
  imageContainer: {
    width: '100%',
    height: 150,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  infoContainer: {
    width: '90%',
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'space-between',
  },
  infoTextContainer: {},
  infoButtonContainer: {},
  titleText: {
    color: Colors.locationColors,
  },
  priceText: {
    color: Colors.priceText,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 20,
  },
  locationText: {
    color: Colors.infoText,
    fontSize: 12,
  },
});

export default Styles;
