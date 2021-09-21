import React from 'react'
import { Image, View, Text, SafeAreaView, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { IProduct } from '../../Helpers/Interfaces';
import Styles from './styles'

const FullScreenSlider = ({ navigation, route }) => {

    const data: IProduct[] = route.params?.datas
    console.log('01 ', data)
    return (
        <SafeAreaView style={Styles.container}>
            <FlatList
                pagingEnabled
                data={data}
                renderItem={(item) =>
                    <View>
                        <ScrollView pagingEnabled horizontal style={Styles.scrollView}>
                            {item.item.productImages.map((image, index) =>
                                <View key={index}>
                                    <Image resizeMode='contain' style={Styles.image} source={{ uri: image }} />
                                </View>)
                            }
                        </ScrollView>
                        <View style={Styles.productInfoContainer}>
                            <View style={Styles.productInfoTextContainer} >
                                <Text style={Styles.productInfoText}>{item.item.productPrice} TL</Text>
                                <Text style={Styles.productInfoText}>{item.item.productTitle}</Text>
                            </View>
                            <TouchableOpacity style={Styles.productGoButton}><Text style={Styles.productInfoText}>Ürüne Git</Text></TouchableOpacity>
                        </View>
                    </View>}
                keyExtractor={(item) => item.productId}
            />
            <View style={Styles.header}><TouchableOpacity style={{ width: 50 }} onPress={() => navigation.goBack()}><Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>X</Text></TouchableOpacity></View>

        </SafeAreaView>
    )
}

export default FullScreenSlider;
