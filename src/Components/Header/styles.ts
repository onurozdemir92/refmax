import {Dimensions, StyleSheet} from 'react-native';
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: height * 0.08,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  headerTitle: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 10,
  },
});

export default styles;
