import {StyleSheet} from 'react-native';
import Colors from '../../Screen/Theme/Colors';

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  leftContainer: {
    flex: 4,
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 2,
  },
  imageContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 19,
  },
  leftSubContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  locationContainer: {
    width: '70%',
    borderColor: Colors.locationColors,
    borderWidth: 1,
    borderRadius: 3,
    flexDirection: 'row',
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  locationText: {
    color: Colors.locationColors,
  },
});

export default Styles;