import firestore from '@react-native-firebase/firestore';

export const getUserInfo = (userId: string) => {
  return  firestore().collection('usersInfo').where('userId', '==', userId).get().then((response) =>{return response.docs[0].data()}).catch((err) => Promise.reject(err));

  

}