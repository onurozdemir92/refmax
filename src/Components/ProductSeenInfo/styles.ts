import {StyleSheet} from 'react-native';
import Colors from '../../Screen/Theme/Colors';

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  subContainer: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  text: {
    marginLeft: 7,
    color: Colors.seenTextColor,
  },
});

export default Styles;
