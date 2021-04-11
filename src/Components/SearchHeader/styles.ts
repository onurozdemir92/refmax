import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 5,
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,.1)',
  },
  inputContainer: {
    flex: 1,
    paddingHorizontal: 5,
  },
  textInput: {
    width: '100%',
  },
  locationContainer: {
    flex: 1,
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Styles;
