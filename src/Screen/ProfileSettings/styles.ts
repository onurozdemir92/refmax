import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  personalInfo: {
    height: height / 5,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 10,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: 'gray',
  },
  left: {
    flexDirection: 'column',
  },
  image: {
    height: 100,
    width: 100,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});

export default Styles;
