import {StyleSheet} from 'react-native';
import Colors from '../../Screen/Theme/Colors';
import Sizes from '../../Screen/Theme/Sizes';

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    height: Sizes.MainHeader,
    borderBottomColor: '#C8D2F5',
    borderBottomWidth: 1,
  },
  titleContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  goBackContainer: {
    height: '100%',
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  titleText: {
    fontSize: 18,
    color: Colors.titleText,
  },
  button: {
    width: 50,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Styles;
