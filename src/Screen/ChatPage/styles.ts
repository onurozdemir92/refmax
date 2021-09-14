import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../Theme/Colors';
const { height } = Dimensions.get('window');
const Styles = StyleSheet.create({
  container: { flex: 1 },
  headerContainer: {
    width: '100%',
    height: height * 0.07,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomColor: Colors.borderColor,
    borderBottomWidth: 1
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 20,
  },
  chatItemContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderBottomColor: Colors.borderColor,
    borderBottomWidth: 1
  },
  productImage: {
    width: 70,
    height: 70
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  userTitleText: {
    color: Colors.MainColor,
    fontWeight: 'bold'
  },
  userAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: 5
  },
  productTitle: {

  },
  messageInfoContainer: {
    flex: 1,
    marginLeft: 10
  },
  LastMessageText: {
    color: Colors.textGray
  },
  lastMessageDateText: {
    color: Colors.textGray
  },
  
});

export default Styles;
