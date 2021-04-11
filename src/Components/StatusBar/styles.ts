import {StyleSheet, StatusBar} from 'react-native';

//Eklenecek
// import {getStatusBarHeight} from 'react-native-status-bar-height';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: StatusBar.currentHeight,
  },
});

export default styles;
