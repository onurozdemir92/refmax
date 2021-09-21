import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import uuid from 'react-native-uuid';
import auth from '@react-native-firebase/auth';

import { createProduct } from '../../Helpers/Api/Product'

const CreateProduct = () => {
    return (
        <View>
            <TouchableOpacity onPress={() => {
                createProduct({
                    createdDate: new Date().toString(),
                    productCity: 'Ankara',
                    productDistrict: 'Çankaya',
                    productImage: 'https://productimages.hepsiburada.net/s/109/300/110000055333862.jpg',
                    productPrice: '100000',
                    productTitle: 'Kamp Sandalyesi',
                    userId: auth().currentUser.uid,
                    productId: uuid.v4().toString(),
                })
            }}><Text>create</Text></TouchableOpacity>
        </View>
    )
}

export default CreateProduct;


