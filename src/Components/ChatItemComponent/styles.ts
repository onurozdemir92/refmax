
import { StyleSheet } from 'react-native'
import Colors from '../../Screen/Theme/Colors';



const Styles = StyleSheet.create({
    productImage: {
        width: 70,
        height: 70
    },
    messageInfoContainer: {
        flex: 1,
        marginLeft: 10
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    userTitleText: {
        color: Colors.MainColor,
        fontWeight: 'bold'
    },
    userAvatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginLeft: 5
    },
    productTitle: {

    },
    LastMessageText: {
        color: Colors.textGray
    },
    lastMessageDateText: {
        color: Colors.textGray
    },
    chatItemContainer: {
        width: '100%',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        borderBottomColor: Colors.borderColor,
        borderBottomWidth: 1
    },
});



export default Styles;

