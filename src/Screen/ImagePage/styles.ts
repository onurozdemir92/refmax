import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: width,
    height: height,
  },
  flex: {
    flex: 1,
  },
  closeContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'gray',
    marginLeft: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeText: {
    fontWeight: 'bold',
    color: 'black',
  },
  bottomContainer: {
    width: width,
    position: 'absolute',
    bottom: 0,
  },
  shareContainer: {
    width: '100%',
    alignItems: 'center',
  },
  shareButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#6EF60A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#0AC4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  space: {
    width: 50,
  },
});

export default Styles;
