import firestore from '@react-native-firebase/firestore';
import { getProductInfo } from '../Product';


export const getChatItems = (userId: string, onMessage: Function) => {
    console.log('userId', userId)
    return firestore().collection('productChatItem').where('users', 'array-contains', userId)
        .onSnapshot((response) => {
            let data = []
            response.docs.map(async (item) => {
                const product = await getProductInfo(item.data().productId.toString());
                console.log('product ', product)
                data.push({ ...item.data(), product: product })
            })
            onMessage(data)
        })


}