import firestore from '@react-native-firebase/firestore';

export const getCatagories = () => {
    return firestore().collection('categories').get().then((response) => {
        let data = []
        response.docs.map((item) => {
            data.push(item.data())
        })
        return data

    }).catch((err) => { console.log('proddd ', err); Promise.reject(err) });



}
