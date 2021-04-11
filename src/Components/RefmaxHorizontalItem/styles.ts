import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const Styles = StyleSheet.create({
  container: {
    width: width,
    height: height * 0.2,
    padding: 5,
  },
  subContainer: {
    flexDirection: 'row',
    flex: 1,
    padding: 5,
  },
  imageContainer: {
    flex: 2,
  },
  textContainer: {
    flex: 4,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 16,
    marginLeft: 10,
  },
  description: {
    marginLeft: 10,
    marginTop: 5,
    color: 'rgba(0,0,0,.4)',
  },
  statusContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,.4)',
    paddingHorizontal: 10,
  },
  statusText: {
    color: 'white',
  },
  addressText: {
    marginLeft: 10,
    color: 'rgba(0,0,0,.4)',
  },
  addressContainer: {
    flexDirection: 'row',
  },
  adressSubContainer: {
    flex: 1,
  },
  buttonsContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  favoriteButtom: {},
  buttonContainer: {
    padding: 10,
  },
});

export default Styles;
