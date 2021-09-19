import firestore from '@react-native-firebase/firestore';
import { IUser } from '../../Interfaces';

export const getUserInfo = (userId: string) => {
  return firestore().collection('usersInfo').where('userId', '==', userId).get().then((response) => {console.log('user: ',response,userId) ;return response.docs[0].data() }).catch((err) => Promise.reject(err));

}

export const createUserInfo = (user: IUser) => {
  return firestore().collection('usersInfo').add(user).then((e) => true).catch((err) => false);
}