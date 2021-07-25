import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scroll: {
    flex: 1,
  },
  profileContainer: {
    width: '100%',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
  },
  commentContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  starsContainer: {
    flexDirection: 'row',
    marginRight: 10,
  },
  pagesContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pagesButton: {
    flexDirection: 'row',
    marginVertical: 5,
    width: '80%',
    height: 50,
  },
  pagesButtonIconContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  pagesButtonTextContainer: {
    flex: 5,
    justifyContent: 'center',
  },
  pagesButtonArrowContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagesButtonText: {
    fontSize: 14,
    color: '#00B0FF',
  },
  pointer: {
    borderTopColor: '#C8D2F5',
    borderTopWidth: 1,
    width: '80%',
  },
  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: '70%',
    borderColor: '#C8D2F5',
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    height: 50,
    marginTop: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonArrowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonCountText: {
    fontSize: 18,
    marginRight: 5,
    color: '#2BE431',
  },
  buttonText: {
    fontSize: 14,
    color: '#818290',
  },
  logoutContainer: {
    width: '100%',
    marginTop: 40,
    alignItems: 'center',
  },
  logoutButton: {
    width: '70%',
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#2BE431',
    borderWidth: 2,
    borderRadius: 15,
  },
  logoutText: {
    color: '#2BE431',
  },
  shopingImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});

export default Styles;
