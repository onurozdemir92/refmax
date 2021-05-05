import {StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get('window');
const Styles = StyleSheet.create({
  container: {flex: 1},
  headerContainer: {
    width: '100%',
    height: height * 0.07,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 20,
  },
});

export default Styles;
