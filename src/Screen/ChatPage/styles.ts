import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../Theme/Colors';
const { height } = Dimensions.get('window');
const Styles = StyleSheet.create({
  container: { flex: 1 },
  headerContainer: {
    width: '100%',
    height: height * 0.07,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomColor: Colors.borderColor,
    borderBottomWidth: 1
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 20,
  },
  
});

export default Styles;
