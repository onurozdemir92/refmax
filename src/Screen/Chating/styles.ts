import { StyleSheet } from 'react-native'
import Colors from '../Theme/Colors'
import Sizes from '../Theme/Sizes'



const Styles = StyleSheet.create({
    container: { flex: 1 },
    headerContainer: {
        width: '100%',
        height: Sizes.MainHeader,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomColor: Colors.borderColor,
        borderBottomWidth: 1,
        paddingHorizontal: 10
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 20,
        color: Colors.titleText,
        flex: 1
    },
    backButton: {
        height: '100%',
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    userAvatar: {
        width: 38,
        height: 38,
        borderRadius: 19,
        borderColor: Colors.MainColor,
        borderWidth: 2
    },
    messagesContainer: {
        flex: 1
    },
    messageInputContainer: {
        width: '100%',
        justifyContent: 'center',
        paddingVertical: 5,
        flexDirection: 'row'
    },
    messageInput: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 30,
        paddingHorizontal: 10
    },
    sendButton: {
        width: 46,
        height: 46,
        borderRadius: 23,
        backgroundColor: Colors.MainColor,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Styles;