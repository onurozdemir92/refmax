import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: height * 0.08,
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header2: {
    height: height * 0.08,
    flexDirection: 'column',
    paddingHorizontal: 10,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  headerTitleContainer: {
    height: '100%',
    justifyContent: 'center',
  },
  // headerTitleText: {
  //   fontSize: 19,
  //   fontWeight: 'bold',
  // },
  // iconContainer: {
  //   height: '100%',
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  // text: {
  //   marginLeft: 10,
  // },
});

export default Styles;
