import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 5,

    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    width: '90%',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#B6B5B4',
    borderRadius: 5,
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
