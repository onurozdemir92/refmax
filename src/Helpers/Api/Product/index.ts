import firestore from '@react-native-firebase/firestore';
import { IProduct } from '../../Interfaces';

export const getProductInfo = (productId: string) => {
    return firestore().collection('products').where('productId', '==', productId.toString()).get().then((response) => { console.log('reeeeee ', response); return response.docs[0].data() }).catch((err) => { console.log('proddd ', err); Promise.reject(err) });



}

