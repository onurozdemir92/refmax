import firestore from '@react-native-firebase/firestore';
import { IProduct } from '../../Interfaces';

export const getProductInfo = (productId: string) => {
    return firestore().collection('products').where('productId', '==', productId.toString()).get().then((response) => { console.log('reeeeee ', response); return response.docs[0].data() }).catch((err) => { console.log('proddd ', err); Promise.reject(err) });



}


export const createProduct = (product: IProduct) => {
    return firestore().collection('products').add(product).then((e) => console.log('ürün paylaşıldı')).catch((err) => console.log('ürün oluşturuluken bir hata oluştu : ', err))
}

export const getAllProducts = () => {
    return firestore().collection('products').get().then((e) => {
        let data = []
        e?.docs?.map((item) => {
            data.push({ ...item.data(), docId: item.id })
        })
        return data
    }).catch((err) => console.log('ürünler getirilirken bir hata oluştu : ', err))
}