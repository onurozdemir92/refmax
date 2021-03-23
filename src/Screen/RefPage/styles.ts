import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');
const Styles = StyleSheet.create({
    container:{
flex:1,
backgroundColor:'white'
    },
  header: {
    width: '100%',
    height: height * 0.08,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  imagesContainer: {
    width: width,
    height: height * 0.4,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  backIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerIconsContainer: {
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
  },
  headerButton: {
    height: '100%',
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
});

export default Styles;
