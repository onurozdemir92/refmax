import moment from 'moment';
import React from 'react'
import { View, Text } from 'react-native';
import Colors from '../../Screen/Theme/Colors';
import Styles from './styles'

interface IChatingComponent {
    item: any;
}



const ChatingComponent = ({ item }: IChatingComponent) => {

    const user = '1';

    const messageInfo = (color: string) => {
        return <View style={Styles.messageInfo}><View style={{ flex: 1 }} /><Text style={{ fontSize: 10, color: color }}>{moment(item.date).format('HH:mm')}</Text></View>
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
            {item?.userId === user ? rightComponent() : leftComponent()}

        </View>
    )
}

export default ChatingComponent
