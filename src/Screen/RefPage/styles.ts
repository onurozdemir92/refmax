import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    width: 50,
    height: '100%',
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
  profileContainer: {
    width: width,
    height: height * 0.08,
    flexDirection: 'row',
    marginTop: 20,
  },
  profileImageContainer: {
    height: '100%',
    width: height * 0.08,
    marginLeft: 10,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: (height * 0.08) / 2,
  },
  profileInfoContainer: {
    flex: 2,
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  profileNameText: {
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#858585',
  },
  profileStarContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  profileIconsContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  profiloIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageIndexContainer: {
    position: 'absolute',
    width: width,
    alignItems: 'center',
    bottom: 10,
  },
  indexSubContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'rgba(0,0,0,.4)',
    borderRadius: 30,
  },
  imageIndexText: {
    color: 'white',
  },
  refInfoContainer: {
    width: width,
    paddingHorizontal: 10,
    marginTop: 20,
    borderBottomColor: 'rgba(0,0,0,.2)',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  refInfoTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  refInfodescriptionText: {
    fontSize: 16,
    marginTop: 10,
  },
  addressText: {
    color: 'rgba(0,0,0,.4)',
    marginTop: 20,
  },
  dateText: {
    color: 'rgba(0,0,0,.4)',
  },
  similarTitleText: {
    marginLeft: 10,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  proportyContainer: {
    width: width,
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  proportySubContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  proportyStringContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  proportyTitle: {
    fontSize: 17,
    color: 'black',
    marginLeft: 5,
  },
  proportySubTitle: {
    color: 'rgba(0,0,0,.4)',
    marginLeft: 5,
  },
});

export default Styles;
