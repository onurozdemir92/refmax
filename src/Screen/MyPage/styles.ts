import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: height / 12,
    flexDirection: 'row',
    paddingHorizontal: 4,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  header: {
    flex: 4,
  },
  leftIcon: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    paddingHorizontal: 8,
  },
  profileImage: {
    width: height / 14,
    height: height / 14,
    borderRadius: (height / 14) * 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  empty: {
    flex: 1,
  },
  ringIcon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingsIcon: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    alignItems: 'center',
  },
});

export default Styles;
