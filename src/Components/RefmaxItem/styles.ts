import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');
const Styles = StyleSheet.create({
  container: {
    width: width / 2,
    height: height * 0.4,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop:10
  },
  refContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.22,
    // shadowRadius: 2.22,

    // elevation: 3,
  },
  imageContainer: {
    width: '100%',
    height: '50%',
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  favoriteButton: {
    position: 'absolute',
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(0,0,0,.2)',
    right: 5,
    top: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    width: '100%',
    flexDirection: 'row',
  },
  titleSubContainer: {
    flex: 1,
  },
  titleText: {
    fontSize: 16,

    marginTop: 5,
  },
  buttonsContainer: {},
  favoriteButtom: {
    marginTop: 5,
  },
  priceContainer: {
    width: '100%',
    marginTop:5
  },
  priceText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  dateContainer:{
    width:'100%',
  },
  dateText:{
    color:'gray'
  },
  stateContainer:{
    width:'100%',
    marginTop:5

  },
  stateText:{
    color:'gray'
  }
});

export default Styles;
