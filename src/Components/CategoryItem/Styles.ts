import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 5,
    marginLeft: 10,
    width: width * 0.25,
    height: height * 0.15,
  },
  categoryText: {
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft:10,
    marginBottom:10
  },
  backgrounImage: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
    justifyContent:'flex-end'
  },
});

export default Styles;
