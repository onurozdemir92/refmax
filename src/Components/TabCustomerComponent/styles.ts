import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopColor: '#DDDEDF',
    borderTopWidth: 0.5,
    paddingVertical: 3,
  },
  tabBarButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Styles;
