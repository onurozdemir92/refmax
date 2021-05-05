import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 30,
    marginLeft: 10,
    paddingHorizontal: 15,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: 'white',
    paddingVertical: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  categoryText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#8E8D8D',
  },
});

export default Styles;
