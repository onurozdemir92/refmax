import { IProductChatItem, IProductChatMessages } from './../../Interfaces/index';
import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid'

export const getMessages = (productChatItem: string, onMessages: Function) => {
    return firestore().collection('productChatMessages').where('productChatItemId', '==', productChatItem).onSnapshot((response) => {
        let data = []
        response?.docs?.map((item) => {
            data.push(item.data())
        })
        onMessages(data.sort(((a, b) => { return new Date(b.sendDate) - new Date(a.sendDate) })))

    });
}

export const sendMessage = (messageItem: IProductChatMessages) => {

    firestore().collection('productChatMessages').add(messageItem).then(() => console.log('mesaj gönderildi'))
        .catch((err) => console.log('mesaj gönderilirken hata oluştu ', err))

}


export const setMessagesItem = (messagesItem: IProductChatItem) => {

    const store = firestore().collection('productChatItem');
    const array: string[] = [messagesItem.users[0].toString(), messagesItem.users[1].toString()]
    const array2: string[] = [messagesItem.users[1].toString(), messagesItem.users[0].toString()]

    return store.where('users', '==', array).where('productId', '==', messagesItem.productId.toString()).get()
        .then((e) => {
            console.log('ilk else 20', e.docs.length, array)

            if (e.docs.length === 0) {
                return store.where('users', '==', array2).where('productId', '==', messagesItem.productId.toString()).get().then(
                    (e) => {
                        console.log('ilk else 21', e.docs.length)

                        if (e.docs.length == 0) {
                            console.log('sadasdasdaadsasasdasdasdasdasdasdasddas')
                            const id = uuid.v4();
                            return store.add({
                                createdAt: new Date().toString(),
                                id: id,
                                productId: messagesItem.productId,
                                users: array
                            }).then((r) => { console.log('yeni oluşturuldu :', r); return { id: id } })
                        } else {
                            return e.docs[0].data()
                        }
                    }
                )

            } else {
                console.log('ilk else', e.docs)
                return e.docs[0].data()
            }
        })

}