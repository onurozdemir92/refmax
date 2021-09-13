import { StyleSheet } from 'react-native';
import Colors from '../Theme/Colors';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginBottom: 30,
    backgroundColor: Colors.MainColor,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  categoryContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Styles;
