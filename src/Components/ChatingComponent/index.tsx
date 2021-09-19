import moment from 'moment';
import React from 'react'
import { View, Text } from 'react-native';
import Colors from '../../Screen/Theme/Colors';
import auth from '@react-native-firebase/auth';

import Styles from './styles'

interface IChatingComponent {
    item: any;
}



const ChatingComponent = ({ item }: IChatingComponent) => {

    const user = auth().currentUser.uid;

    const messageInfo = (color: string) => {
        return <View style={Styles.messageInfo}><View style={{ flex: 1 }} /><Text style={{ fontSize: 10, color: color }}>{moment(new Date(item.sendDate)).format('HH:mm')}</Text></View>
    }

    const textContainer = (text: string, color: string) => {
        return <Text style={{ color: color, fontSize: 16 }}>{text}</Text>
    }

    const rightComponent = () => {
        return (
            <>
                <View style={{ flex: 1 }} /><View style={[Styles.rightContainer, { backgroundColor: Colors.MainColor }]}>
                    {textContainer(item.text, 'white')}
                    {messageInfo('white')}
                </View>
            </>)
    }

    const leftComponent = () => {
        return (
            <>
                <View style={[Styles.leftContainer, { backgroundColor: 'white' }]}>
                    {textContainer(item.text, '#878988')}
                    {messageInfo('#878988')}
                </View><View style={{ flex: 1 }} />
            </>)
    }
    return (
        <View style={Styles.container}>
            {item?.from === user ? rightComponent() : leftComponent()}

        </View>
    )
}

export default ChatingComponent
